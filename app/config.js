const liveUrl = 'http://team.crosstech.com.tr/api';
const devUrl = 'http://192.168.2.112:3131/api';
const assetUrl = 'http://team.crosstech.com.tr/assets';
const isDebug = false;

export default (Config = {
	isDebug,
	assetUrl,
	apiUrl: isDebug ? devUrl : liveUrl
});
