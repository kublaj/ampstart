/**
 * Copyright 2017 The AMP Start Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gulp = require('gulp-help')(require('gulp'));
const validator = require('gulp-amphtml-validator');
const config = require('./config');

function validate() {
  return gulp.src([
        `${config.dest.templates}/**/*.html`,
        `${config.dest.www_pages}/**/*.html`,
        `!${config.dest.templates}/components/**/*.html`,
        `!${config.dest.hl_partials}/**/*.html`,
      ])
      .pipe(validator.validate())
      .pipe(validator.format());
}

gulp.task('validate', validate);
