// create the controller and inject Angular's $scope
demo_app.controller('dashboardController', function ($scope, $location, $window, $http, $mdToast) {

    var realServer = "https://mutual-twitter-friends-api.herokuapp.com/twitter/mutual?";
    var localServer = "http://localhost:8080/twitter/mutual?";
    var server = realServer;
    $scope.error = false;
    $scope.wait = false;


    $scope.users = {};//JSON.parse("{\"jazzyb\":{\"name\":\"Jazzy B\",\"screen_name\":\"jazzyb\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/945112885448941568/pSaG67y5_normal.jpg\",\"followers_count\":997105},\"iHrithik\":{\"name\":\"Hrithik Roshan\",\"screen_name\":\"iHrithik\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/852874627181367297/BhCGvY6d_normal.jpg\",\"followers_count\":24377042},\"SunburnFestival\":{\"name\":\"Sunburn Festival\",\"screen_name\":\"SunburnFestival\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1024535147801133057/AaKaoedt_normal.jpg\",\"followers_count\":2093267},\"FestivalSherpa\":{\"name\":\"Festival Sherpa\",\"screen_name\":\"FestivalSherpa\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/494023662991732737/ks8Bjn0U_normal.jpeg\",\"followers_count\":340112},\"RanveerOfficial\":{\"name\":\"Ranveer Singh\",\"screen_name\":\"RanveerOfficial\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1006576559858126849/QBEno5sg_normal.jpg\",\"followers_count\":10705110},\"TheShilpaShetty\":{\"name\":\"SHILPA SHETTY KUNDRA\",\"screen_name\":\"TheShilpaShetty\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/929324251458420736/bXcF9ywJ_normal.jpg\",\"followers_count\":5691074},\"imVkohli\":{\"name\":\"Virat Kohli\",\"screen_name\":\"imVkohli\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/789817267567472640/BlpcUEvx_normal.jpg\",\"followers_count\":26558207},\"priyankachopra\":{\"name\":\"PRIYANKA\",\"screen_name\":\"priyankachopra\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1013141371488817152/XLQ2dqNk_normal.jpg\",\"followers_count\":23225785},\"iamsrk\":{\"name\":\"Shah Rukh Khan\",\"screen_name\":\"iamsrk\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/661679664/keep_it_onn_normal.jpg\",\"followers_count\":36383780},\"shahidkapoor\":{\"name\":\"Shahid Kapoor\",\"screen_name\":\"shahidkapoor\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1000589078864146437/1Bd90hbW_normal.jpg\",\"followers_count\":13573909},\"FarOutAkhtar\":{\"name\":\"Farhan Akhtar\",\"screen_name\":\"FarOutAkhtar\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/911185584076607488/tSZ09eZ7_normal.jpg\",\"followers_count\":11790260},\"humasqureshi\":{\"name\":\"Huma Qureshi\",\"screen_name\":\"humasqureshi\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1035852512434311168/QsDAtUSA_normal.jpg\",\"followers_count\":3189986},\"Twitter\":{\"name\":\"Twitter\",\"screen_name\":\"Twitter\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1013798240683266048/zRim1x6M_normal.jpg\",\"followers_count\":55375447},\"harbhajan_singh\":{\"name\":\"Harbhajan Turbanator\",\"screen_name\":\"harbhajan_singh\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1032310979277807616/8dtii8qp_normal.jpg\",\"followers_count\":8931199},\"BarackObama\":{\"name\":\"Barack Obama\",\"screen_name\":\"BarackObama\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg\",\"followers_count\":102297326},\"AnushkaSharma\":{\"name\":\"Anushka Sharma\",\"screen_name\":\"AnushkaSharma\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1039402318461128704/ttqs_D3W_normal.jpg\",\"followers_count\":17832050},\"Asli_Jacqueline\":{\"name\":\"Jacqueline Fernandez\",\"screen_name\":\"Asli_Jacqueline\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/903177340758499328/JBQCerJM_normal.jpg\",\"followers_count\":13015003},\"googledrive\":{\"name\":\"Google Drive\",\"screen_name\":\"googledrive\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/940690787976675328/MgGefMRh_normal.jpg\",\"followers_count\":1895906},\"HackerEarth\":{\"name\":\"HackerEarth\",\"screen_name\":\"HackerEarth\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1037967910868676608/xxdY7LWc_normal.jpg\",\"followers_count\":13517},\"sachin_rt\":{\"name\":\"Sachin Tendulkar\",\"screen_name\":\"sachin_rt\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/2504398687/344204969_normal.jpg\",\"followers_count\":27098713},\"BillGates\":{\"name\":\"Bill Gates\",\"screen_name\":\"BillGates\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_normal.jpg\",\"followers_count\":45818505},\"intel\":{\"name\":\"Intel\",\"screen_name\":\"intel\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/961743312221696000/Vtv9ZITM_normal.jpg\",\"followers_count\":4761460},\"Windows\":{\"name\":\"Windows\",\"screen_name\":\"Windows\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/875388334003986432/eUsjmVRJ_normal.jpg\",\"followers_count\":6163827},\"Microsoft\":{\"name\":\"Microsoft\",\"screen_name\":\"Microsoft\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl_normal.jpg\",\"followers_count\":8393434},\"tim_cook\":{\"name\":\"Tim Cook\",\"screen_name\":\"tim_cook\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1035649273721847809/B0f8n_oe_normal.jpg\",\"followers_count\":10985013},\"jimmysheirgill\":{\"name\":\"Jimmy sheirgill\",\"screen_name\":\"jimmysheirgill\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1000803064456998912/vRoLpHRZ_normal.jpg\",\"followers_count\":986157},\"HarmanderSahib\":{\"name\":\"Golden Temple\",\"screen_name\":\"HarmanderSahib\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/2691278630/5ef1fe17323242987cd8f96a9836f14c_normal.jpeg\",\"followers_count\":3036},\"deepikapadukone\":{\"name\":\"Deepika Padukone\",\"screen_name\":\"deepikapadukone\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/996687724043218944/vFejWnUF_normal.jpg\",\"followers_count\":24700368},\"GooglePlay\":{\"name\":\"Google Play\",\"screen_name\":\"GooglePlay\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/808350098178670592/bYyZI8Bp_normal.jpg\",\"followers_count\":6917567},\"Android\":{\"name\":\"Android\",\"screen_name\":\"Android\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_normal.jpg\",\"followers_count\":10127795},\"googlenexus\":{\"name\":\"Nexus\",\"screen_name\":\"googlenexus\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/648894436861067265/lI_IbD1v_normal.jpg\",\"followers_count\":1192982},\"bomanirani\":{\"name\":\"Boman Irani\",\"screen_name\":\"bomanirani\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/664342899920760832/_HMAYCg1_normal.jpg\",\"followers_count\":5110735},\"sherryontopp\":{\"name\":\"Navjot Singh Sidhu\",\"screen_name\":\"sherryontopp\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/3534535878/3f80b26835f06c3fad6753e38f6c75ee_normal.jpeg\",\"followers_count\":396948},\"igippygrewal\":{\"name\":\"Gippy Grewal\",\"screen_name\":\"igippygrewal\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1038647323092348928/ysdxG5-z_normal.jpg\",\"followers_count\":1977771},\"SukshnderShinda\":{\"name\":\"Sukshinder Shinda\",\"screen_name\":\"SukshnderShinda\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/998058566454931456/iz-9apIN_normal.jpg\",\"followers_count\":397654},\"neerubajwa\":{\"name\":\"Neeru Bajwa\",\"screen_name\":\"neerubajwa\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/751846472887332864/lYqomGa6_normal.jpg\",\"followers_count\":436662},\"diljitdosanjh\":{\"name\":\"DILJIT DOSANJH\",\"screen_name\":\"diljitdosanjh\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1018503216361697282/hfWwRJSo_normal.jpg\",\"followers_count\":3514370},\"troll_punjabi\":{\"name\":\"Troll Punjabi\",\"screen_name\":\"troll_punjabi\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/620964396307603461/YoxUmV2b_normal.jpg\",\"followers_count\":2142},\"WhatTheFFacts\":{\"name\":\"What The F*** Facts\",\"screen_name\":\"WhatTheFFacts\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/707970310176382976/6P3fPrGD_normal.jpg\",\"followers_count\":6147229},\"RNTata2000\":{\"name\":\"Ratan N. Tata\",\"screen_name\":\"RNTata2000\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1655289586/RNT-Image_01_normal.jpg\",\"followers_count\":7268726},\"TheVijayMallya\":{\"name\":\"Vijay Mallya\",\"screen_name\":\"TheVijayMallya\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/827708603/Copy_of_VJM_4_normal.JPG\",\"followers_count\":5923436},\"narendramodi\":{\"name\":\"Narendra Modi\",\"screen_name\":\"narendramodi\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_normal.jpg\",\"followers_count\":43987172},\"ArvindKejriwal\":{\"name\":\"Arvind Kejriwal\",\"screen_name\":\"ArvindKejriwal\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/945853608389574656/REH_LpUJ_normal.jpg\",\"followers_count\":14045034},\"ajaydevgn\":{\"name\":\"Ajay Devgn\",\"screen_name\":\"ajaydevgn\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/916953695522234369/xA5XaiwM_normal.jpg\",\"followers_count\":9835092},\"BeingSalmanKhan\":{\"name\":\"Salman Khan\",\"screen_name\":\"BeingSalmanKhan\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/838562307/IMG00882-20100416-0034_normal.jpg\",\"followers_count\":34591798},\"akshaykumar\":{\"name\":\"Akshay Kumar\",\"screen_name\":\"akshaykumar\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/841956276141711360/Yh7xHO41_normal.jpg\",\"followers_count\":28025000},\"aamir_khan\":{\"name\":\"Aamir Khan\",\"screen_name\":\"aamir_khan\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/798826399725297664/4awXtggx_normal.jpg\",\"followers_count\":23698097},\"thekiranbedi\":{\"name\":\"Kiran Bedi\",\"screen_name\":\"thekiranbedi\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/451311379639574528/KEwEfRFg_normal.jpeg\",\"followers_count\":11736586},\"SrBachchan\":{\"name\":\"Amitabh Bachchan\",\"screen_name\":\"SrBachchan\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/768780297437450240/FJBOm5n8_normal.jpg\",\"followers_count\":35042666},\"KapilSharmaK9\":{\"name\":\"KAPIL\",\"screen_name\":\"KapilSharmaK9\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/814719777256009728/ihh7w6za_normal.jpg\",\"followers_count\":12573437},\"asliyoyo\":{\"name\":\"Yo Yo Honey Singh\",\"screen_name\":\"asliyoyo\",\"profile_image_url\":\"http://pbs.twimg.com/profile_images/985035946059018241/qEtV0APj_normal.jpg\",\"followers_count\":5240315},\"status\":1}");

    $scope.getMutualFriends = function () {
        $scope.users = {};
        $scope.wait = true;
        $scope.error = false;
        var username1 = $scope.user1;
        var username2 = $scope.user2;

        httpRequest("GET", server + "u1=" + username1 + "&u2=" + username2, "", function (response) {
            processSuccess(response)
        }, function (response) {
            warning(response)
        });

    };


    function processSuccess(response) {

        if (response.data.status === 1) {
            $scope.users = response.data;
            delete $scope.users['status'];
        }
        else {
            $scope.error = response.data.error;
        }
        $scope.wait = false;

        //log.debug(JSON.stringify(response));

    }

    function warning(response) {
        $scope.wait = false;
        $scope.error = response;
        alert(response);
    }


    function httpRequest(method, url, data, successMethod, failedMethod) {
        var httpRequest = $http({
            method: method,
            url: url,
            data: data,
            dataType: 'json',
            headers: {"Content-Type": "application/json"}
        });

        httpRequest.then(function onSuccess(response) {
            successMethod(response);
        });

        httpRequest.catch(function onError(response) {
            failedMethod(response)
        });
    }


});