<template>
  <div class="prediction">
    <div class="col-left">
      <div class="container">
        <jalan-calendar></jalan-calendar>
        <div class="inplay-pregame">
          <div class="inplay">
            <jalan-preheader />
            <jalan-nomatch v-if="leagueInPlay.length==0" />
            <div v-else class="inplay-container">
              <template v-for="(league,index) in leagueInPlay">
                <jalan-pre-league :league="league" :key="`league${index}`" />
                <jalan-match-container v-for="(match,index) in inplay" :key="index" v-if="match.league==league" :dataMatch="match">
                  <jalan-match-inplay :match="match" />
                  <jalan-inplay-prediction :dataMatch="match" />
                  <jalan-under-over-inplay :dataMatch="match" />
                </jalan-match-container>
              </template>
            </div>
            <jalan-preheader type="expired" label="expired in-play" />
            <jalan-nomatch v-if="leagueExpiredInPlay.length==0" />
            <div v-else class="inplay-container">
              <template v-for="(league,index) in leagueExpiredInPlay">
                <jalan-pre-league :league="league" :key="`leagueexpired${index}`" />
                <jalan-match-container v-for="(match,index) in expiredInplay" :key="index" v-if="match.league==league" :dataMatch="match" type="expired">
                  <jalan-match-inplay :match="match" />
                  <jalan-inplay-prediction :dataMatch="match" />
                  <jalan-under-over-inplay :dataMatch="match" />
                </jalan-match-container>
              </template>
            </div>
          </div>
          <div class="pregame">
            <jalan-preheader type="pregame" label="pregame" />
            <jalan-nomatch v-if="leaguePregame.length==0" />
            <div v-else class="pregame-container">
              <template v-for="(league,index) in leaguePregame">
                <jalan-pre-league :league="league" :key="`pregame${index}`" />
                <jalan-match-container v-for="(match,index) in pregame" v-if="match.league==league" :key="`matchpregame${index}`" :dataMatch="match" type="pregame">
                  <jalan-match-pregame :match="match" />
                  <jalan-pregame-prediction :dataMatch="match" />
                  <jalan-under-over-pregame :dataMatch="match" />
                </jalan-match-container>
              </template>
            </div>
            <jalan-preheader type="expired" label="expired pre-game" />
            <jalan-nomatch v-if="leagueExpiredPregame.length==0" />
            <div v-else class="pregame-container">
              <template v-for="(league,index) in leagueExpiredPregame">
                <jalan-pre-league :league="league" :key="`matchExpiredPregame${index}`" />
                <jalan-match-container v-for="(match,index) in expiredPregame" :key="index" v-if="match.league==league" :dataMatch="match" type="expired">
                  <jalan-match-inplay :match="match" />
                  <jalan-pregame-prediction :dataMatch="match" />
                  <jalan-under-over-pregame :dataMatch="match" />
                </jalan-match-container>
              </template>
            </div>
          </div>
          <div class="footer">
            All Right Reserved. © 2018. Powered by In-Play
          </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <jalan-detailinplay>
        <jalan-prediction-detail />
        <jalan-pre-league :league="getDataPrediction.league" />
        <jalan-score-time :dataMatch="getDataPrediction" />
        <jalan-vs-team :dataMatch="getDataPrediction" />
        <jalan-content-detail>
          <jalan-live-cast />
          <jalan-tab-odd-ou :data="['odds','handicap','home','away']" />
          <jalan-company-odd :dataMatch="getDataPrediction" />
          <jalan-tab-odd-ou :data="['ou','total goals','over','under']" />
          <jalan-company-over-under :dataMatch="getDataPrediction" />
        </jalan-content-detail>
      </jalan-detailinplay>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      inplay: [],
      expiredInplay: [],
      pregame: [],
      expiredPregame: [],
    }
  },
  computed: {
    ...mapGetters('inplay', ['getMatchInPlay', 'geMatchPreagme']),
    ...mapGetters('predictiondetail', ['getDataPrediction']),
    leagueInPlay() {
      let match = _.filter(this.getMatchInPlay, ({match_period}) => {
        return match_period !== 'FT'
      })
      this.setDataLeague(match, 'inplay')
      return _.union(_.map(match, 'league'))
    },
    leagueExpiredInPlay() {
      let matchExpired = _.filter(this.getMatchInPlay, ({match_period}) => {
        return match_period === 'FT'
      })
      this.setDataLeague(matchExpired, 'expiredInplay')
      return _.union(_.map(matchExpired, 'league'))
    },
    leaguePregame() {
      let match = _.filter(this.geMatchPreagme, ({match_period}) => {
        return match_period !== 'FT'
      })
      this.setDataLeague(match, 'pregame')
      return _.union(_.map(match, 'league'))
    },
    leagueExpiredPregame() {
      let matchExpired = _.filter(this.geMatchPreagme, ({match_period}) => {
        return match_period === 'FT'
      })
      this.setDataLeague(matchExpired, 'expiredPregame')
      return _.union(_.map(matchExpired, 'league'))
    },
  },
  methods: {
    ...mapActions('inplay', ['setMatchInPlay', 'setMatchPreagme']),
    ...mapActions('predictiondetail', ['setDataPrediction', 'setPredictionType']),
    unionLeague(data) {
      return _.union(_.map(data, 'league'))
    },
    setDataLeague(data, type) {
      switch (type) {
        case 'inplay':
          this.inplay = data
          break
        case 'expiredInplay':
          this.expiredInplay = data
          break
        case 'pregame':
          this.pregame = data
          break
        case 'expiredPregame':
          this.expiredPregame = data
          break
      }
      this.setDataDefault(data, type)
    },
    setDataDefault(data, type) {
      switch (type) {
        case 'inplay':
          if (data.length != 0) {
            var league = this.unionLeague(data)[0]
            this.setDataPrediction(
              _.filter(data, match => {
                return match.league == league
              })[0]
            )
          }
          break
        case 'pregame':
          if (_.isEmpty(this.getDataPrediction) && data.length != 0) {
            let league = this.unionLeague(data)[0]
            this.setDataPrediction(
              _.filter(data, match => {
                return match.league == league
              })[0]
            )
            this.setPredictionType('pregame')
          }
          break
        case 'expiredInplay':
          break
        case 'expiredPregame':
          break
      }
    },
  },
  mounted() {
    this.$root.GetData.getInPlayPregame(this)
  },
}
</script>

<style lang="stylus" scoped>
.prediction
  display grid
  grid-template-columns auto 512px
  grid-template-rows 100vh

.detail
  background-color rgba(0, 0, 0, 0.34)

.col-left
  background-color #333

.inplay-pregame
  display grid
  grid-template-columns repeat(2, 1fr)
  grid-gap 4px
  max-height calc(100vh - 128px)
  overflow-x hidden
  -webkit-overflow-scrolling touch
  margin 0 8px

.pregame-container, .inplay-container
  background-color #f0f0f0
  padding-bottom 8px

.inplay
  padding-right 4px

.pregame
  padding-right 4px

.footer
  grid-column span 2 / auto
  color #fff
  opacity 0.34
  font-size 12px
  text-align center
  padding 24px 0px
  border-top 1px solid

@media (max-width: 1199px)
  .prediction
    grid-template-columns minmax(320px, auto) minmax(320px, 512px)

  .inplay-pregame
    grid-template-columns repeat(1, 1fr)
    justify-items center
    grid-gap 0

  .inplay, .pregame
    max-width 360px
    min-width 320px
    width 100%

  .footer
    grid-column span 1 / auto
    min-width 100%

@media (max-width: 767px)
  .prediction
    grid-template-columns repeat(1, 1fr)

  .detail
    z-index 3
    position fixed
    top 0
    width 100%
    height 100%
</style>
