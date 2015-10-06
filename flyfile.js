/*------------------------------------------------------------

0. Setting */

import browserSync from 'browser-sync'
const reload = browserSync.reload

const paths = {
  jade: ['jade/**/*.jade'],
  sass: ['sass/**/*.scss'],

  watch: {
    jade: 'jade/*.jade',
    sass: 'sass/*.scss',
  },

  dist: {
    jade: 'dist',
    sass: 'dist/css',
  }
}

/*------------------------------------------------------------

1. Default task */

export default function* () {
  yield this.start(['sass', 'jade', 'server'])
  yield this.watch(paths.sass, ['sass', 'liveReload'])
  yield this.watch(paths.jade, ['jade', 'liveReload']);
}

/* SASS compile */
export function* sass () {
  yield this
    .source(paths.watch.sass)
    .sass({
      outputStyle: "compressed",
      includePaths: ["sass"],
    })
    .target(paths.dist.sass);
}

/* Jade compile */
export function* jade () {
  yield this
    .source(paths.watch.jade)
    .jade({
      base: 'jade'
    })
    .target(paths.dist.jade);
};

/* Live reload */
export function* liveReload () {
  browserSync.reload()
}

/* Local Server */
export function* server () {
  browserSync({
    server: 'dist/'
  })
}
