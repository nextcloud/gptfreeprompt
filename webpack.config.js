// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
const path = require('path')
// we extend the Nextcloud webpack config
const webpackConfig = require('@nextcloud/webpack-vue-config')
// this is to enable eslint and stylelint during compilation
const ESLintPlugin = require('eslint-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const buildMode = process.env.NODE_ENV
const isDev = buildMode === 'development'
webpackConfig.devtool = isDev ? 'cheap-source-map' : 'source-map'

webpackConfig.stats = {
	colors: true,
	modules: false,
}

const appId = 'gptfreeprompt'
webpackConfig.entry = {
	reference: { import: path.join(__dirname, 'src', 'reference.js'), filename: appId + '-reference.js' },
	generationPage: { import: path.join(__dirname, 'src', 'generationPage.js'), filename: appId + '-generationPage.js' },
	// adminSettings: { import: path.join(__dirname, 'src', 'adminSettings.js'), filename: appId + '-adminSettings.js' },
}

// this enables eslint and stylelint during compilation
webpackConfig.plugins.push(
	new ESLintPlugin({
		extensions: ['js', 'vue'],
		files: 'src',
		failOnError: !isDev,
	})
)
webpackConfig.plugins.push(
	new StyleLintPlugin({
		files: 'src/**/*.{css,scss,vue}',
		failOnError: !isDev,
	}),
)

module.exports = webpackConfig