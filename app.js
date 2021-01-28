const fetch = require('node-fetch');


function get_data(id) {
    return fetch(`https://twitter.com/i/api/2/timeline/conversation/${id}.json?include_can_media_tag=1`, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0',
            'Accept': '*/*',
            // 'x-twitter-auth-type': 'OAuth2Session',
            'x-twitter-client-language': 'en',
            'x-twitter-active-user': 'yes',
            'x-csrf-token': '61f5eaca4a7cbfe13da8c9d43346b970',
            'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            'Cookie': '_ga=GA1.2.1715866331.1605680921; kdt=cSEXyypt4dNLQciMqxN98UZPVtniibs8dzhMJ1ba; remember_checked_on=1; csrf_same_site_set=1; csrf_same_site=1; des_opt_in=Y; mbox=PC#2e091f23c3504adea5a305ec88e0a96e.37_0#1674820292|session#fbca2bae54b047fd89501f34605d7ad3#1611577257; cd_user_id=17730615d6eb3-05843f2769a3028-4c3f207e-100200-17730615d6f1d8; _gid=GA1.2.1627690545.1611820856; dnt=1; _sl=1; personalization_id="v1_e7xBgGALweg+dAzjiS2Xxg=="; guest_id=v1%3A161182088099239318; ct0=61f5eaca4a7cbfe13da8c9d43346b970; lang=en; gt=1354750161487073287',
            'x-guest-token': '1354750161487073287'
        }

    }).then(res => res.json().then(json_respone => {
        var tweet_type = json_respone['globalObjects']['tweets'][id]['extended_entities']['media'][0]['type']
        if (tweet_type === 'photo') {
            return json_respone['globalObjects']['tweets'][id]['extended_entities']['media'][0]['media_url_https']
        }
    }))
}


module.exports = {
    download: get_data
}