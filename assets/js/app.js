function detectTab() {
    const platform = navigator.platform.toLowerCase(),
        iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

    if (platform.includes('mac')) return 'ios';
    if (iosPlatforms.includes(platform)) return 'ios';
    if (platform.includes('win')) return 'windows';
    if (/android/.test(navigator.userAgent.toLowerCase())) return 'android';
    if (/linux/.test(platform)) return 'windows';

    return 'windows';
}

$(document).ready(function() {
    $('#pills-'+detectTab()+'-tab').tab('show')
    $('#content').show()
})