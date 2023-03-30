//即時関数（グローバル汚染を避ける）
(()=>{
    //$マークはDOM要素の意味として人が認識できるように付ける
    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll("[data-nav]")
    const $content = $tab.querySelectorAll("[data-content]")

    //初期化
    const init = () => {
        $content[0].style.display = "block";
    };
    init();

    //クリックしたら起こるイベント
    const handleClick = (e) => {
        //preventDefaultでリンクタグの持つリンク機能を無効化
        e.preventDefault();

        //クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //対象外のnav, contentを全てリセットする
        let index = 0;
        while(index < $nav.length){
            $content[index].style.display = "none";
            $nav[index].classList.remove("is-active");
            index++;
        }

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = "block";
        $nav[targetVal].classList.add("is-active");
    };

    //全nav要素に対して関数を適用・発火
    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener("click", (e) => handleClick(e));
        index++;
    }

})();


//accordion
(() => {

    const $elm = document.querySelector("#js-accordion");
    const $trigger = $elm.getElementsByTagName("a");


    const triggerLen = $trigger.length;
    let index = 0;
    while (index < triggerLen){
        $trigger[index].addEventListener("click", (e) => clickHandler(e));
        index++;
    }


    //クリックされたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();

        const $target = e.currentTarget;
        const $content = $target.nextElementSibling;

        if ($content.style.display === "block"){
            $content.style.display = "none";
        } else {
            $content.style.display = "block";
        }
    };


})();