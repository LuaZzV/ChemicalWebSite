function closed()
{
    const info = document.getElementById('info')
    info.classList.remove("active")
    info.classList.add("close")
}
function info(element)
{
    const info = document.getElementById('info')
    if(element == "H" && info.classList == "close" || info.classList == "nope")
    {   
        info.classList.remove("nope")
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="H-info"></div>
        <textH1>Водород</textH1>
        <textH2>Водород (H) - это самый простой и обычный химический элемент во вселенной, атомный номер которого равен 1. При стандартных условиях это газ без цвета, вкуса и запаха. Водород является наиболее распространенным химическим элементом во Вселенной и составляет примерно 75% ее массы. Он встречается в большом количестве соединений, таких как вода (H2O) и углеводороды. Водород имеет множество применений, включая использование в производстве аммиака для удобрений, водородных топливных элементах, производстве металлов и масштабных процессах синтеза. Кроме того, водород играет важную роль в ядерных реакциях, происходящих в солнце и других звездах, что приводит к эмиссии света и тепла.</textH2>
        <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B4"><textH3>Подробнее</textH3></a>
        `
    }
    else if(element == "Li" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Li-info"></div>
        <textLi1>Литий</textLi1>
        <textLi2>Литий (Li) - это металлический элемент, расположенный в первой группе таблицы Менделеева. Он имеет атомный номер 3. Литий является мягким и легким металлом, который обладает высокой химической активностью. Он используется в различных областях, включая производство лекарственных препаратов для лечения биполярного расстройства, в батареях литий-ионного типа (широко используемых в мобильных устройствах и электромобилях), а также в ядерной энергетике. Литий также может быть использован для улучшения производительности стали в металлургии.</textLi2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%82%D0%B8%D0%B9"><textLi3>Подробнее</textLi3></a>
        `
    }
    else if(element == "Na" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Na-info"></div>
        <textNa1>Натрий</textNa1>
        <textNa2>
        Натрий (Na) - это щелочной металл с атомным номером 11. Он имеет серебристо-белый металлический блеск и является одним из самых распространенных элементов в земной коре и океанах. Натрий активно реагирует с водой, образуя гидроксид натрия (щелочь) и высвобождая водород. Он широко используется в промышленности для производства щелочи, стекла, мыла и других химических продуктов. Натрий также играет важную роль в биологических системах, где он является необходимым элементом для правильного функционирования нервной системы и регулирования водного баланса в организме.</textNa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%82%D1%80%D0%B8%D0%B9"><textNa3>Подробнее</textNa3></a>
        `
    }
    else if(element == "K" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="K-info"></div>
        <textK1>Калий</textK1>
        <textK2>Калий (K) - это химический элемент с атомным номером 19. Он является мягким, серебристо-белым металлом, который легко реагирует с водой, образуя щелочь и высвобождая водород. Калий находится во многих минералах, таких как сильвинит, карналлит и лантанит, и широко используется в промышленности для производства удобрений, стекла, мыла и других химических продуктов. Он также необходим для здоровья растений, поскольку является важным питательным элементом. В биологических системах калий играет важную роль в поддержании электролитного баланса и нормального функционирования нервной системы и мышц.</textK2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D0%B9"><textK3>Подробнее</textK3></a>
        `
    }
    else if(element == "Rb" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Rb-info"></div>
        <textRb1>Рубидий</textRb1>
        <textRb2>Рубидий (Rb) - это мягкий, серебристо-белый металл, расположенный в первой группе таблицы Менделеева. Он имеет атомный номер 37. Рубидий реагирует с водой, образуя щелочные растворы, и является одним из самых реакционноспособных элементов. Из-за своей высокой реакционной способности рубидий применяется в научных исследованиях, а также в производстве специальных стекол и фоточувствительных устройств. Кроме того, его соединения используются в медицине, атомной физике и электронике.
        </textRb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B1%D0%B8%D0%B4%D0%B8%D0%B9"><textRb3>Подробнее</textRb3></a>
        `
    }
    else if(element == "Cs" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cs-info"></div>
        <textCs1>Цезий</textCs1>
        <textCs2>Цезий (Cs) - это мягкий, серебристо-белый металл, находящийся в первой группе таблицы Менделеева с атомным номером 55. Цезий является одним из самых реакционноспособных металлов и редко встречается в природе в свободной форме. Его соединения используются в катодах вакуумных трубок и в качестве катализаторов в органическом синтезе. Также цезий используется в атомных часах, измерениях времени и в некоторых типах электроники, таких как фоточувствительные устройства.</textCs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%B7%D0%B8%D0%B9"><textCs3>Подробнее</textCs3></a>
        `
    }
    else if(element == "Fr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Fr-info"></div>
        <textFr1>Франций</textFr1>
        <textFr2>Франций (Fr) - это редкий и экстремально реактивный химический элемент, находящийся в первой группе таблицы Менделеева с атомным номером 87. В природе франций представлен в виде следовых количеств в некоторых минералах, но в основном производится искусственно в лабораториях. Из-за его крайней реактивности и радиоактивности, он используется исключительно в научных исследованиях, в особенности в области ядерной физики. Ввиду своей крайней короткой полужизни, около 22 минуты, и высокой радиоактивности, франций не имеет практических применений в промышленности или в быту.</textFr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D0%B9"><textFr3>Подробнее</textFr3></a>
        `
    }
    else if(element == "Be" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Be-info"></div>
        <textBe1>Бериллий</textBe1>
        <textBe2>Бериллий (Be) - это легкий металл, находящийся во второй группе таблицы Менделеева с атомным номером 4. Он обладает высокой прочностью и легкостью, а также хорошей теплопроводностью. Бериллий используется в промышленности, в основном в виде сплавов с другими металлами, такими как медь, алюминий и никель. Эти сплавы применяются в производстве инструментов, механических деталей и компонентов воздушных и космических аппаратов из-за своей легкости и прочности. Однако бериллий является токсичным при вдыхании его пыли, поэтому требуется особый контроль при обращении с ним.</textBe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D0%B9"><textBe3>Подробнее</textBe3></a>
        `
    }
    else if(element == "Mg" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Mg-info"></div>
        <textMg1>Магний</textMg1>
        <textMg2>Магний (Mg) - это легкий металл, находящийся во второй группе таблицы Менделеева с атомным номером 12. Он является одним из наиболее распространенных элементов в земной коре. Магний обладает хорошей прочностью при низком весе, высокой теплопроводностью и электропроводностью. Из-за этих свойств магний широко используется в авиационной, автомобильной и строительной промышленности, в производстве легких сплавов, а также в качестве катода в щелочных батареях. Он также играет важную роль в биологических системах, в том числе в костях и в метаболизме.
        </textMg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D0%B9"><textMg3>Подробнее</textMg3></a>
        `
    }
    else if(element == "Ca" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ca-info"></div>
        <textCa1>Кальций</textCa1>
        <textCa2>Кальций (Ca) - это щелочноземельный металл, расположенный во второй группе таблицы Менделеева с атомным номером 20. Он является одним из наиболее распространенных элементов в земной коре. Кальций играет важную роль в строительстве костей и зубов, а также в многих биологических процессах, таких как свертывание крови, сокращение мышц и передача нервных импульсов. Он также используется в промышленности для производства цемента, стали, алюминия, стекла и других материалов. Кроме того, кальций применяется в пищевой промышленности как пищевая добавка и в медицине для лечения недостатка кальция и ряда других заболеваний.</textCa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8C%D1%86%D0%B8%D0%B9"><textCa3>Подробнее</textCa3></a>
        `
    }
    else if(element == "Sr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sr-info"></div>
        <textSr1>Стронций</textSr1>
        <textSr2>Стронций (Sr) - это щелочноземельный металл, находящийся во второй группе таблицы Менделеева с атомным номером 38. Он обычно находится в минералах, таких как стронцианит и целестин. Стронций используется в различных отраслях промышленности, включая производство пиротехнических компонентов, светящихся материалов для телевизоров и компьютерных мониторов, а также в некоторых видов керамики и стекла. Он также применяется в медицине в качестве контрастного средства при рентгенологических исследованиях и в лечении остеопороза.</textSr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%BE%D0%BD%D1%86%D0%B8%D0%B9"><textSr3>Подробнее</textSr3></a>
        `
    }
    else if(element == "Ba" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ba-info"></div>
        <textBa1>Барий</textBa1>
        <textBa2>Барий (Ba) - это щелочноземельный металл, находящийся во второй группе таблицы Менделеева с атомным номером 56. Он обычно находится в минералах, таких как барит (сульфат бария) и вощина (карбонат бария). Барий используется в различных отраслях промышленности, включая производство бариевых соединений, таких как бариевые цементы, пигменты для красок и лаков, а также в производстве стекла и керамики. Он также используется в медицине для рентгенологических исследований, так как барий имеет высокую рентгеноконтрастную способность, что делает его полезным в диагностике пищевода, желудка и кишечника.
        </textBa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D0%B8%D0%B9"><textBa3>Подробнее</textBa3></a>
        `
    }
    else if(element == "Ra" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ra-info"></div>
        <textRa1>Радий</textRa1>
        <textRa2>Радий (Ra) - это редкий радиоактивный металл, находящийся во второй группе таблицы Менделеева с атомным номером 88. Он является одним из самых тяжелых элементов, обычно находится в урановых и ториевых рудах. Радий обладает высокой радиоактивностью и был использован в прошлом в качестве источника радиационного лечения рака. Однако из-за его опасности для здоровья и короткого периода полураспада, радий больше не используется в медицине. Также радий применялся в исторических лампах с самородным бликом и в часах с радиевыми циферблатами, но из-за радиоактивности эти применения были прекращены в связи с безопасностью.</textRa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%B9"><textRa3>Подробнее</textRa3></a>
        `
    }
    else if(element == "Sc" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sc-info"></div>
        <textSc1>Скандий</textSc1>
        <textSc2>Скандий (Sc) - это переходный металл, находящийся в третьей группе таблицы Менделеева с атомным номером 21. Он имеет серебристо-белый цвет и химически сходен с элементами группы лантаноидов. Скандий используется в металлургии для укрепления алюминиевых сплавов, что делает их более прочными и устойчивыми к коррозии. Он также применяется в производстве специальных стекол с высокой прозрачностью и термостойкостью, а также в качестве катализатора в органическом синтезе. В медицине скандий используется в рентгенологических исследованиях как контрастное вещество и в ядерной медицине для диагностики.
        </textSc2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%B9"><textSc3>Подробнее</textSc3></a>
        `
    }
    else if(element == "Y" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Y-info"></div>
        <textY1>Иттрий</textY1>
        <textY2>Иттрий (Y) - это переходный металл, находящийся в третьей группе таблицы Менделеева с атомным номером 39. Он имеет серебристо-белый цвет и химически сходен с элементами группы лантаноидов. Иттрий используется в производстве специальных сплавов, которые обладают высокой прочностью и термостойкостью, например в производстве легированной стали. Также иттрий применяется в производстве керамики, магнитов и светодиодов. В медицине он используется в рентгенологических исследованиях и в некоторых лекарственных препаратах.
        </textY2>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D1%82%D1%82%D1%80%D0%B8%D0%B9"><textY3>Подробнее</textY3></a>
        `
    }
    else if(element == "Ti" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ti-info"></div>
        <textTi1>Титан</textTi1>
        <textTi2>Титан (Ti) - это переходный металл, находящийся в четвертой группе таблицы Менделеева с атомным номером 22. Он обладает серебристо-серым оттенком и химически стабилен при комнатной температуре. Титан имеет высокую прочность и легкость, поэтому широко используется в авиационной, космической и медицинской промышленности. Он применяется для изготовления легких и прочных сплавов, используемых в авиации, медицинских имплантатах и спортивном оборудовании. Также титан используется в производстве химического оборудования, а также в производстве красок, пигментов и солнечных батарей.
        </textTi2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D1%82%D0%B0%D0%BD_(%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)"><textTi3>Подробнее</textTi3></a>
        `
    }
    else if(element == "Zr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Zr-info"></div>
        <textZr1>Цирконий</textZr1>
        <textZr2>Цирконий (Zr) - это переходный металл, находящийся в четвертой группе таблицы Менделеева с атомным номером 40. Он имеет серебристо-серый цвет и высокую стойкость к коррозии. Цирконий широко используется в различных отраслях промышленности, включая производство ядерных реакторов из-за своей низкой сечения захвата нейтронов. Он также используется в производстве керамических материалов, таких как циркониевые оксиды, которые применяются в качестве теплостойких и коррозионностойких покрытий, а также в медицинских имплантатах. Кроме того, цирконий используется в ювелирном и часовом производстве, так как он обладает высоким блеском и стойкостью к царапинам.</textZr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D1%80%D0%BA%D0%BE%D0%BD%D0%B8%D0%B9"><textZr3>Подробнее</textZr3></a>
        `
    }
    else if(element == "Hf" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Hf-info"></div>
        <textHf1>Гафний</textHf1>
        <textHf2>Гафний (Hf) - это переходный металл, находящийся в четвертой группе таблицы Менделеева с атомным номером 72. Он очень похож на цирконий и часто находится вместе с ним в минералах. Гафний обладает высокой теплостойкостью и химической инертностью, поэтому используется в аэрокосмической, ядерной и химической промышленности. Он применяется в ядерных реакторах для защиты от нейтронов, а также в производстве специализированных сплавов для высокотемпературных и коррозионностойких приложений. Гафний также используется в электронике для изготовления кремниевых чипов и полупроводников.
        </textHf2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%84%D0%BD%D0%B8%D0%B9"><textHf3>Подробнее</textHf3></a>
        `
    }
    else if(element == "Rf" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Rf-info"></div>
        <textRf1>Резерфордий</textRf1>
        <textRf2>Резерфордий (Rf) - это искусственно созданный элемент, который относится к серии трансурановых элементов. Он находится в четвертом периоде и восьмой группе таблицы Менделеева с атомным номером 104. Резерфордий является радиоактивным и очень тяжелым элементом, который был синтезирован в лабораторных условиях. Из-за его крайне короткой полужизни, которая составляет всего несколько секунд, его химические свойства мало изучены, и он не имеет практических применений в настоящее время, кроме научных исследований в области ядерной физики.
        </textRf2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B7%D0%B5%D1%80%D1%84%D0%BE%D1%80%D0%B4%D0%B8%D0%B9"><textRf3>Подробнее</textRf3></a>
        `
    }
    else if(element == "La" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="La-info"></div>
        <textLa1>Лантан</textLa1>
        <textLa2>Лантан (La) - это химический элемент, который относится к группе лантаноидов и находится в пятом периоде таблицы Менделеева с атомным номером 57. Он является мягким серебристо-белым металлом и редкоземельным элементом. Лантан используется в производстве специализированных стекол, керамики, катализаторов и металлов сплавов. Также он используется в сфере электроники для создания катодов в кинескопах и в медицине в качестве контрастного средства при рентгенологических исследованиях.</textLa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BD%D1%82%D0%B0%D0%BD"><textLa3>Подробнее</textLa3></a>
        `
    }
    else if(element == "Ac" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ac-info"></div>
        <textAc1>Актиний</textAc1>
        <textAc2>Актиний (Ac) - это радиоактивный химический элемент, который находится в 7-й период и 2-й группе таблицы Менделеева с атомным номером 89. Он относится к серии актиноидов. Актиний и его соединения используются в научных исследованиях, особенно в области радиохимии и ядерной физики. Его изотоп актиний-227 используется в качестве источника гамма-излучения в рентгеновских и радионуклидных исследованиях. Также актиний применяется в некоторых медицинских процедурах и в других научных областях, хотя его использование ограничено из-за его радиоактивных свойств.
        </textAc2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82%D0%B8%D0%BD%D0%B8%D0%B9"><textAc3>Подробнее</textAc3></a>
        `
    }
    else if(element == "V" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="V-info"></div>
        <textV1>Ванадий</textV1>
        <textV2>Ванадий (V) - это переходный металл, находящийся в пятой группе таблицы Менделеева с атомным номером 23. Он имеет серый металлический блеск и химически активен. Ванадий используется в различных отраслях промышленности, включая производство стали и сплавов, таких как титан-ванадиевые сплавы, которые используются в авиационной и аэрокосмической промышленности из-за своей прочности и теплостойкости. Он также применяется в производстве катализаторов, аккумуляторов, медицинских имплантатов и в некоторых типах стекла и керамики.
        </textV2>
        <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BD%D0%B0%D0%B4%D0%B8%D0%B9"><textV3>Подробнее</textV3></a>
        `
    }
    else if(element == "Nb" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Nb-info"></div>
        <textNb1>Ниобий</textNb1>
        <textNb2>Ниобий (Nb) - это переходный металл, находящийся в пятой группе таблицы Менделеева с атомным номером 41. Он обладает серебристо-серым металлическим блеском и химически стабилен при комнатной температуре. Ниобий имеет высокую стойкость к коррозии и обладает высокой теплопроводностью. Он широко используется в производстве сплавов, применяемых в аэрокосмической, энергетической и химической промышленности, а также в производстве специализированных сталей для высоких температур и коррозионностойких приложений. Ниобий также применяется в производстве суперпроводников, медицинских имплантатов и в некоторых электронных устройствах.</textNb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BE%D0%B1%D0%B8%D0%B9"><textNb3>Подробнее</textNb3></a>
        `
    }
    else if(element == "Ta" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ta-info"></div>
        <textTa1>Тантал</textTa1>
        <textTa2>Тантал (Ta) - это переходный металл, находящийся в пятой группе таблицы Менделеева с атомным номером 73. Он обладает серебристо-серым металлическим блеском и высокой теплостойкостью. Тантал является очень устойчивым к коррозии и обладает высокой плотностью. Он широко используется в производстве специализированных сплавов для аэрокосмической, электронной и химической промышленности, включая высокотемпературные сплавы для реакторов и турбин, а также в производстве катодов для электронных ламп и в современных электронных устройствах. Тантал также применяется в медицинских имплантатах и в некоторых типах оборудования для производства полупроводников.
        </textTa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D1%82%D0%B0%D0%BB_(%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)"><textTa3>Подробнее</textTa3></a>
        `
    }
    else if(element == "Db" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Db-info"></div>
        <textDb1>Дубний</textDb1>
        <textDb2>Дубний (Db) - это искусственный элемент, относящийся к серии трансактинидов. Он находится в пятой группе таблицы Менделеева с атомным номером 105. Дубний был синтезирован в лаборатории и имеет очень короткое время жизни, что делает его изучение сложным. Из-за его высокой радиоактивности и короткого времени существования, дубний не имеет практических применений в настоящее время, за исключением научных исследований в области ядерной физики.
        </textDb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%94%D1%83%D0%B1%D0%BD%D0%B8%D0%B9"><textDb3>Подробнее</textDb3></a>
        `
    }
    else if(element == "Ce" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ce-info"></div>
        <textCe1>Церий</textCe1>
        <textCe2>Церий (Ce) - это элемент, принадлежащий к группе лантаноидов и находящийся в шестом периоде таблицы Менделеева с атомным номером 58. Он имеет серебристо-белый металлический блеск и химически активен. Церий широко используется в различных отраслях промышленности, включая производство катализаторов, стекла и керамики. Он также применяется в производстве сплавов для специальных магнитов, ламп и металлургических процессов. В медицине церий может использоваться в качестве компонента некоторых лекарственных препаратов.</textCe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D1%80%D0%B8%D0%B9"><textCe3>Подробнее</textCe3></a>
        `
    }
    else if(element == "Th" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Th-info"></div>
        <textTh1>Торий</textTh1>
        <textTh2>Торий (Th) - это радиоактивный элемент, находящийся в четвертой группе таблицы Менделеева с атомным номером 90. Он является тяжелым металлом и обладает серебристо-серым цветом. Торий используется в ядерной энергетике как ядерное топливо в некоторых типах реакторов. Он также применяется в производстве специализированных легированных материалов, например, для создания высокопрочных и теплостойких сплавов. Кроме того, торий может использоваться в производстве электроники, в медицине для лечения рака и в других научных и промышленных областях.</textTh2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%80%D0%B8%D0%B9"><textTh3>Подробнее</textTh3></a>
        `
    }
    else if(element == "Cr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cr-info"></div>
        <textCr1>Хром</textCr1>
        <textCr2>Хром (Cr) - это переходный металл, находящийся в шестой группе таблицы Менделеева с атомным номером 24. Он имеет серебристо-серый цвет и химически стабилен при комнатной температуре. Хром является важным компонентом сплавов, таких как нержавеющая сталь, благодаря своей устойчивости к коррозии и высокой твердости. Он также используется в химической промышленности для производства хромовых соединений, которые применяются в качестве пигментов для красок, лаков и керамических материалов. Кром также применяется в электроэнергетике, медицине и в других отраслях промышленности.
        </textCr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BC"><textCr3>Подробнее</textCr3></a>
        `
    }
    else if(element == "Mo" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Mo-info"></div>
        <textMo1>Молибден</textMo1>
        <textMo2>Молибден (Mo) - это переходный металл, находящийся в шестой группе таблицы Менделеева с атомным номером 42. Он обладает серебристо-белым металлическим блеском и химически стабилен при комнатной температуре. Молибден широко используется в промышленности, особенно в производстве высокопрочных и жаропрочных сплавов, таких как сталь с добавкой молибдена. Эти сплавы применяются в авиации, судостроении, нефтегазовой промышленности и других отраслях, где требуется высокая прочность и стойкость к высоким температурам и коррозии. Кроме того, молибден используется в качестве катализатора, в производстве электродов для сварки, а также в некоторых типах электроники.</textMo2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D0%B8%D0%B1%D0%B4%D0%B5%D0%BD"><textMo3>Подробнее</textMo3></a>
        `
    }
    else if(element == "W" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="W-info"></div>
        <textW1>Вольфрам</textW1>
        <textW2>Вольфрам (W) - это переходный металл, находящийся в шестой группе таблицы Менделеева с атомным номером 74. Он обладает серебристо-белым металлическим блеском и высокой температурной стойкостью. Вольфрам широко используется в промышленности благодаря своей высокой твердости и температурной стойкости. Он применяется в производстве высокопрочных сплавов, таких как вольфрамовые карбиды и вольфрамовые сплавы, которые используются в аэрокосмической, автомобильной, и металлургической промышленности. Вольфрам также применяется в производстве электродов для сварки, электронных устройств, и в некоторых типах ламп.</textW2>
        <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D1%8C%D1%84%D1%80%D0%B0%D0%BC"><textW3>Подробнее</textW3></a>
        `
    }
    else if(element == "Sg" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sg-info"></div>
        <textSg1>Сиборгий</textSg1>
        <textSg2>Сиборгий (Sg) - это искусственно созданный элемент, относящийся к серии трансактинидов. Он находится в шестой группе таблицы Менделеева с атомным номером 106. Сиборгий был синтезирован в лаборатории и имеет очень короткое время жизни, что делает его изучение сложным. Из-за его высокой радиоактивности и короткого времени существования, сиборгий не имеет практических применений в настоящее время, за исключением научных исследований в области ядерной физики.</textSg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%BE%D1%80%D0%B3%D0%B8%D0%B9"><textSg3>Подробнее</textSg3></a>
        `
    }
    else if(element == "Pr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pr-info"></div>
        <textPr1>Празеодим</textPr1>
        <textPr2>Празеодим (Pr) - это элемент, принадлежащий к группе лантаноидов и находящийся в шестом периоде таблицы Менделеева с атомным номером 59. Он обладает серебристо-белым металлическим блеском и химически активен. Празеодим используется в производстве специализированных сплавов, магнитов, ламп, стекол и катализаторов. Кроме того, он может использоваться в некоторых видов стекла для создания пигментов и в медицине как компонент некоторых лекарственных препаратов.</textPr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B7%D0%B5%D0%BE%D0%B4%D0%B8%D0%BC"><textPr3>Подробнее</textPr3></a>
        `
    }
    else if(element == "Pa" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pa-info"></div>
        <textPa1>Протактиний</textPa1>
        <textPa2>Протактиний (Pa) - это радиоактивный элемент, находящийся в седьмой группе таблицы Менделеева с атомным номером 91. Он является тяжелым металлом и обладает серебристо-белым блеском. Протактиний используется в научных исследованиях в области ядерной физики и ядерной энергетики. Из-за его высокой радиоактивности и короткого времени полураспада, у него пока нет широких практических применений.</textPa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%B0%D0%BA%D1%82%D0%B8%D0%BD%D0%B8%D0%B9"><textPa3>Подробнее</textPa3></a>
        `
    }
    else if(element == "Mn" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Mn-info"></div>
        <textMn1>Марганец</textMn1>
        <textMn2>Марганец (Mn) - это химический элемент, находящийся в седьмой группе таблицы Менделеева с атомным номером 25. Он является серовато-белым металлом, который быстро окисляется на воздухе, приобретая характерный бледно-розовый оттенок. Марганец широко используется в производстве стали и других сплавов, где его добавляют для улучшения прочности и устойчивости к коррозии. Он также применяется в производстве батареек, керамики, пигментов для красок и лаков, а также в производстве удобрений. Марганец играет важную роль в биологических системах, участвуя в ряде ферментативных процессов.</textMn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%B3%D0%B0%D0%BD%D0%B5%D1%86"><textMn3>Подробнее</textMn3></a>
        `
    }
    else if(element == "Tc" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Tc-info"></div>
        <textTc1>Технеций</textTc1>
        <textTc2>Технеций (Tc) - это искусственный элемент, который находится в седьмой группе таблицы Менделеева с атомным номером 43. Он является радиоактивным и имеет короткое время полураспада, что делает его изучение и использование сложными. Технеций применяется в ядерной медицине, в частности, в радионуклидной диагностике, а также в научных исследованиях. Он также используется в некоторых типах датчиков и источников радиоактивного излучения.</textTc2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%85%D0%BD%D0%B5%D1%86%D0%B8%D0%B9"><textTc3>Подробнее</textTc3></a>
        `
    }
    else if(element == "Re" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Re-info"></div>
        <textRe1>Рений</textRe1>
        <textRe2>Рений (Re) - это переходный металл, находящийся в седьмой группе таблицы Менделеева с атомным номером 75. Он имеет серебристо-белый металлический блеск и химически стабилен при комнатной температуре. Рений используется в промышленности в качестве катализатора, в производстве специализированных сплавов, которые применяются в высокотемпературных приложениях, таких как турбины и реакторы. Он также используется в электронике, медицине и научных исследованиях.</textRe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BD%D0%B8%D0%B9"><textRe3>Подробнее</textRe3></a>
        `
    }
    else if(element == "Bh" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Bh-info"></div>
        <textBh1>Борий</textBh1>
        <textBh2>Борий (Bh) - это неметалл, находящийся в третьей группе таблицы Менделеева с атомным номером 5. Он обладает высокой теплопроводностью и химической инертностью. Борий находит применение в производстве стекла и керамики, в качестве добавки в металлургических процессах, а также как компонент в ядерной энергетике и в производстве полупроводников. Кроме того, борий используется в медицине и в качестве пестицида в сельском хозяйстве.
        </textBh2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D0%B9"><textBh3>Подробнее</textBh3></a>
        `
    }
    else if(element == "Nd" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Nd-info"></div>
        <textNd1>Неодим</textNd1>
        <textNd2>Неодим (Nd) - это элемент, принадлежащий к группе лантаноидов и находящийся в шестом периоде таблицы Менделеева с атомным номером 60. Он является серебристо-белым металлом и химически активным. Неодим используется в производстве мощных магнитов, таких как неодимовые магниты, которые применяются в различных электронных и электротехнических устройствах, включая динамики, микромоторы и генераторы. Также неодим применяется в производстве лазеров, стекол и керамики, а также в некоторых лекарственных препаратах.</textNd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BE%D0%B4%D0%B8%D0%BC"><textNd3>Подробнее</textNd3></a>
        `
    }
    else if(element == "U" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="U-info"></div>
        <textU1>Уран</textU1>
        <textU2>Уран (U) - это радиоактивный элемент, находящийся в шестой группе таблицы Менделеева с атомным номером 92. Уран широко известен как топливо для ядерных реакторов и ядерного оружия. Его изотопы, включая уран-235 и уран-238, являются основными материалами для деления атомов в реакторах и ядерных бомбах. Помимо ядерной энергетики, уран используется в промышленности для создания высокопрочных сплавов, например в авиационной и космической промышленности. Он также применяется в медицине, для лечения рака, и в других научных исследованиях.</textU2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B0%D0%BD_(%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)"><textU3>Подробнее</textU3></a>
        `
    }
    else if(element == "Fe" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Fe-info"></div>
        <textFe1>Железо</textFe1>
        <textFe2>Железо (Fe) - это химический элемент с атомным номером 26. Оно является одним из самых распространенных металлов в земной коре и широко используется в промышленности благодаря своим механическим и химическим свойствам. Железо играет ключевую роль в процессах жизнедеятельности организмов, таких как транспорт кислорода в крови благодаря белку гемоглобину. Оно также является важным компонентом различных структур, включая сталь, что делает его важным материалом для строительства и производства.</textFe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BE"><textFe3>Подробнее</textFe3></a>
        `
    }
    else if(element == "Ru" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ru-info"></div>
        <textRu1>Рутений</textRu1>
        <textRu2>Рутений (Ru) - это химический элемент с атомным номером 44. Он относится к платиновой группе металлов и является одним из самых редких и драгоценных металлов. Рутений обладает высокой стойкостью к коррозии и высокой температурной устойчивостью, что делает его ценным для использования в катализе, электронике и ювелирном искусстве. Он также находит применение в медицине, в том числе в качестве катализатора в химических реакциях и в протезах, благодаря своей биосовместимости и инертности.</textRu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%82%D0%B5%D0%BD%D0%B8%D0%B9"><textRu3>Подробнее</textRu3></a>
        `
    }
    else if(element == "Os" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Os-info"></div>
        <textOs1>Осмий</textOs1>
        <textOs2>Осмий (Os) - это химический элемент с атомным номером 76. Он также принадлежит к платиновой группе металлов, и, как и рутений, является одним из самых редких и драгоценных металлов. Осмий обладает высокой плотностью и твердостью, что делает его одним из самых плотных элементов в таблице Менделеева. Этот металл широко используется в качестве катализатора в химических процессах, а также в производстве некоторых специальных сплавов. Также осмий используется в ювелирном искусстве, в том числе для создания драгоценных украшений. Однако из-за своей токсичности и реактивности его применение ограничено.</textOs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BC%D0%B8%D0%B9"><textOs3>Подробнее</textOs3></a>
        `
    }
    else if(element == "Hs" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Hs-info"></div>
        <textHs1>Хассий</textHs1>
        <textHs2>Хассий (Hs) - это искусственно созданный химический элемент с атомным номером 108. Он был синтезирован впервые в лаборатории в 1984 году. Хассий является тяжелым и радиоактивным элементом, который нельзя найти в природе и существует только в лабораторных условиях. Из-за крайне короткого периода полураспада, его свойства изучаются лишь в ограниченной степени. На данный момент его применение ограничивается исследованиями в области ядерной физики и химии.</textHs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%81%D1%81%D0%B8%D0%B9"><textHs3>Подробнее</textHs3></a>
        `
    }
    else if(element == "Pm" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pm-info"></div>
        <textPm1>Прометий</textPm1>
        <textPm2>Прометий (Pm) - это редкоземельный химический элемент с атомным номером 61. Он является одним из немногих элементов, для которых стабильные изотопы не существуют. Прометий встречается в природе лишь в следовых количествах и обычно производится искусственным путем. Он был открыт в 1945 году и получил название в честь героя греческой мифологии, Прометея. Прометий используется в радиоизотопных источниках энергии, в частности, в небольших источниках энергии для космических аппаратов и в медицинских приборах, таких как радиоизотопные батареи и импланты.</textPm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%BC%D0%B5%D1%82%D0%B8%D0%B9"><textPm3>Подробнее</textPm3></a>
        `
    }
    else if(element == "Np" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Np-info"></div>
        <textNp1>Нептуний</textNp1>
        <textNp2>Нептуний (Np) - это радиоактивный химический элемент с атомным номером 93. Он был назван в честь Нептуна, восьмой планеты от Солнца. Нептуний является тяжелым металлом и не встречается в природе в обычных условиях, но его можно получить в результате ядерных реакций, в том числе в ядерных реакторах и взрывах ядерных бомб. Он используется в ядерной технологии, в том числе в качестве топлива для некоторых видов ядерных реакторов и в производстве других радиоактивных элементов. Нептуний также является объектом интереса в научных исследованиях, в частности, в радиохимии и ядерной физике.</textNp2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD%D0%B8%D0%B9"><textNp3>Подробнее</textNp3></a>
        `
    }
    else if(element == "Co" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Co-info"></div>
        <textCo1>Кобальт</textCo1>
        <textCo2>Кобальт (Co) - это металлический элемент с атомным номером 27. Он является серебристо-белым металлом с блеском, который обычно имеет магнитные свойства. Кобальт является важным компонентом различных сплавов, включая магнитные сплавы, используемые в производстве магнитов и электроники. Он также применяется в производстве литий-ионных аккумуляторов, катализаторов, медицинского оборудования и красителей. Кобальт используется также в производстве витаминов, таких как витамин B12, который важен для здоровья человека.</textCo2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D1%82"><textCo3>Подробнее</textCo3></a>
        `
    }
    else if(element == "Rh" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Rh-info"></div>
        <textRh1>Родий</textRh1>
        <textRh2>Родий (Rh) - это химический элемент с атомным номером 45 и принадлежит к платиновой группе металлов. Он имеет серебристо-белый цвет и высокую стойкость к коррозии и окислению. Родий является одним из самых редких и драгоценных металлов в мире. Он широко используется в промышленности, особенно в производстве автомобильных катализаторов, где он помогает уменьшать выбросы вредных веществ в выхлопных газах. Родий также используется в ювелирном искусстве, а также в электронике и химической промышленности.</textRh2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B4%D0%B8%D0%B9"><textRh3>Подробнее</textRh3></a>
        `
    }
    else if(element == "Ir" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ir-info"></div>
        <textIr1>Иридий</textIr1>
        <textIr2>Иридий (Ir) - это химический элемент с атомным номером 77. Он также относится к платиновой группе металлов и является одним из самых плотных и тяжелых известных элементов. Иридий обладает высокой стойкостью к коррозии и высокой температурной устойчивостью, что делает его полезным в различных применениях. Он широко используется в промышленности, в частности в производстве катализаторов, электроники, лабораторного оборудования и ювелирных изделий. Благодаря своей твердости и устойчивости, иридий также используется в производстве сопротивлений, электродов и других специализированных компонентов.</textIr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%B8%D0%B4%D0%B8%D0%B9"><textIr3>Подробнее</textIr3></a>
        `
    }
    else if(element == "Mt" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Mt-info"></div>
        <textMt1>Мейнтерий</textMt1>
        <textMt2>Мейтнерий (Mt) - это искусственно созданный радиоактивный химический элемент с атомным номером 109. Он был впервые синтезирован в 1982 году в лаборатории Лоуренса Беркли в США. Этот элемент назван в честь Лизы Мейтнер, физика-теоретика, известного своими исследованиями в области радиоактивности. Из-за крайне малых количеств, в которых его можно получить, и короткого времени полураспада, мейтнерий служит объектом исследований в области ядерной физики. Его применения ограничены в основном исследованиями, но его изучение помогает расширить наше понимание о структуре атомных ядер и свойствах экзотических элементов.</textMt2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B9%D1%82%D0%BD%D0%B5%D1%80%D0%B8%D0%B9"><textMt3>Подробнее</textMt3></a>
        `
    }
    else if(element == "Sm" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sm-info"></div>
        <textSm1>Самарий</textSm1>
        <textSm2>Самарий (Sm) - это редкоземельный металлический элемент с атомным номером 62. Он был назван в честь российской географической области Самара. Самарий используется в различных технологических приложениях, включая производство магниевых сплавов, магнитов и лазерных материалов. Он также используется в производстве специальных стекол и катализаторов. Одним из наиболее известных применений самария является его использование в составе некоторых типов магнитов, так называемых "редкоземельных магнитов", которые находят применение во многих устройствах, включая электронику, автомобильную промышленность и зеленые технологии.</textSm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B8%D0%B9"><textSm3>Подробнее</textSm3></a>
        `
    }
    else if(element == "Pu" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pu-info"></div>
        <textPu1>Плутоний</textPu1>
        <textPu2>Плутоний (Pu) - это радиоактивный химический элемент с атомным номером 94. Он получил свое название в честь планеты Плутон. Плутоний является тяжелым металлом, который создается в ядерных реакторах при делении урана или в результате искусственного синтеза. Этот элемент используется в ядерной промышленности, в частности для создания ядерного топлива для реакторов и ядерных боеголовок. Плутоний-239, один из его изотопов, имеет способность к самоподдержанию деления, что делает его основным материалом для атомного оружия. В то же время, плутоний также является источником радиоизотопов для использования в медицинских целях и в исследованиях. Из-за его радиоактивности и токсичности обращение с плутонием требует особой осторожности и регулирования.</textPu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D1%83%D1%82%D0%BE%D0%BD%D0%B8%D0%B9"><textPu3>Подробнее</textPu3></a>
        `
    }
    else if(element == "Ni" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ni-info"></div>
        <textNi1>Никель</textNi1>
        <textNi2>Никель (Ni) - это серебристо-белый металлический элемент с атомным номером 28 в таблице Менделеева. Он является одним из самых распространенных элементов в земной коре. Никель обладает высокой устойчивостью к коррозии и окислению, что делает его ценным материалом для различных промышленных приложений. Он широко используется в производстве нержавеющей стали, сплавов и монет. Никель также применяется в электронике, электропроводке, химической промышленности и производстве аккумуляторов. В медицине никель используется в качестве катализатора в некоторых биохимических реакциях и в некоторых медицинских устройствах.</textNi2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%B5%D0%BB%D1%8C"><textNi3>Подробнее</textNi3></a>
        `
    }
    else if(element == "Pd" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pd-info"></div>
        <textPd1>Палладий</textPd1>
        <textPd2>Палладий (Pd) - это благородный металл с атомным номером 46 в таблице Менделеева. Он имеет серебристо-белый оттенок и является одним из самых редких и ценных металлов. Палладий обладает высокой коррозионной стойкостью и способностью к химическому инертности. Он широко используется в промышленности, включая производство автомобильных катализаторов, электроники, ювелирных украшений, оптики и многих других областях. Палладий также используется в медицинских приборах, в частности в стоматологии, а также в некоторых химических процессах в качестве катализатора. Благодаря своей уникальной комбинации свойств, палладий остается важным материалом для различных технических и промышленных приложений.</textPd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%BB%D0%B0%D0%B4%D0%B8%D0%B9_(%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)"><textPd3>Подробнее</textPd3></a>
        `
    }
    else if(element == "Pt" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pt-info"></div>
        <textPt1>Платина</textPt1>
        <textPt2>Платина (Pt) - это благородный металл с атомным номером 78 в таблице Менделеева. Он имеет серебристо-белый цвет и является одним из самых редких и ценных металлов в мире. Платина обладает высокой устойчивостью к коррозии, высокой температурной стойкостью и химической инертностью. Эти свойства делают ее ценным материалом для различных промышленных и научных приложений. Платина широко используется в производстве ювелирных изделий, катализаторов, электродов, лабораторного оборудования, медицинских приборов и многого другого. Она также играет ключевую роль в производстве автомобильных катализаторов, которые помогают снизить выбросы вредных веществ в выхлопных газах. Платина также используется в ядерной промышленности, в частности для производства ядерного топлива и компонентов реакторов.</textPt2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B0"><textPt3>Подробнее</textPt3></a>
        `
    }
    else if(element == "Ds" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ds-info"></div>
        <textDs1>Дармштадтий</textDs1>
        <textDs2>Дармштадтий (Ds) - это синтетический химический элемент с атомным номером 110 в таблице Менделеева. Он был синтезирован впервые в 1994 году в лаборатории Gesellschaft für Schwerionenforschung (GSI) в городе Дармштадт, Германия. Дармштадтий является тяжелым и крайне радиоактивным элементом, и его изотопы имеют очень короткое время полураспада. Из-за этого его свойства и химические реакции пока что изучены в ограниченной степени. Применение дармштадтия в основном связано с исследованиями в области ядерной физики и химии, а также с поиском новых элементов и расширением нашего понимания структуры атомного ядра.</textDs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D1%80%D0%BC%D1%88%D1%82%D0%B0%D0%B4%D1%82%D0%B8%D0%B9"><textDs3>Подробнее</textDs3></a>
        `
    }
    else if(element == "Eu" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Eu-info"></div>
        <textEu1>Европий</textEu1>
        <textEu2>Европий (Eu) - это редкоземельный металл с атомным номером 63 в таблице Менделеева. Он получил свое название в честь континента Европы. Европий используется в различных промышленных и научных приложениях, включая производство цветных телевизионных экранов и компьютерных мониторов. Он также применяется в производстве компакт-дисков, энергосберегающих ламп и других электронных устройств. Европий также используется в качестве катализатора в некоторых химических реакциях и в медицинских приборах, таких как лазеры и магнитные резонансные сканеры.</textEu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B8%D0%B9"><textEu3>Подробнее</textEu3></a>
        `
    }
    else if(element == "Am" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Am-info"></div>
        <textAm1>Америций</textAm1>
        <textAm2>Америций (Am) - это радиоактивный химический элемент с атомным номером 95 в таблице Менделеева. Этот элемент назван в честь Америки. Америций не встречается в природе, а получается в лабораторных условиях путем искусственного синтеза. Он используется в радиоизотопных источниках энергии, в частности в источниках энергии для космических аппаратов и в радиоизотопных батареях. Америций также применяется в исследованиях в области ядерной физики и химии, а также в медицине для терапевтических и диагностических целей. Однако из-за его радиоактивности обращение с америцием требует особой осторожности и регулирования.</textAm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D1%86%D0%B8%D0%B9"><textAm3>Подробнее</textAm3></a>
        `
    }
    else if(element == "Cu" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cu-info"></div>
        <textCu1>Медь</textCu1>
        <textCu2>Медь (Cu) — это химический элемент с атомным номером 29, принадлежащий к переходным металлам в периодической таблице элементов. Он обладает высокой тепло- и электропроводностью, что делает его незаменимым в электротехнике и электронике. Медь имеет красновато-оранжевый цвет в чистом виде и может приобретать зеленую патину при окислении. Этот металл широко используется в строительстве, производстве монет, ювелирных изделий и в качестве компонента различных сплавов, таких как бронза (сплав меди с оловом) и латунь (сплав меди с цинком). Медь также играет важную роль в биологических системах, входя в состав многих ферментов.</textCu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D1%8C"><textCu3>Подробнее</textCu3></a>
        `
    }
    else if(element == "Ag" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ag-info"></div>
        <textAg1>Серебро</textAg1>
        <textAg2>Серебро (Ag) — это благородный металл с атомным номером 47 в периодической таблице элементов. Оно обладает высокой тепло- и электропроводностью, что делает его ценным для использования в электронике и изготовлении электрических контактов и проводников. Серебро также известно своими антимикробными свойствами, благодаря чему оно находит применение в медицине и в производстве предметов гигиены и стерилизации. В дополнение к этому, серебро широко используется в ювелирном деле благодаря своему блеску и красоте, а также в производстве фотографических материалов и в качестве инвестиционного товара. Серебро может тускнеть и темнеть при воздействии сероводорода в воздухе, образуя на своей поверхности черный слой сульфида серебра.</textAg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE"><textAg3>Подробнее</textAg3></a>
        `
    }
    else if(element == "Au" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Au-info"></div>
        <textAu1>Золото</textAu1>
        <textAu2>Золото (Au) — это благородный металл с атомным номером 79 в периодической таблице элементов. Оно известно своим ярким желтым цветом и блеском, а также высокой плотностью, мягкостью и пластичностью. Золото обладает высокой химической стойкостью, не окисляется на воздухе и не растворяется в большинстве кислот. Эти свойства делают его ценным материалом для ювелирных изделий, инвестиций и в качестве международного платежного средства. Кроме того, золото используется в электронике, зубопротезировании, медицине и многих других областях.</textAu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%BE"><textAu3>Подробнее</textAu3></a>
        `
    }
    else if(element == "Rg" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Rg-info"></div>
        <textRg1>Рентгений</textRg1>
        <textRg2>Рентгений (Rg) — это синтетический элемент с атомным номером 111. Этот элемент был впервые получен в 1994 году в Обществе тяжелоионных исследований в Дармштадте, Германия. Рентгений является одним из трансактиноидных элементов и имеет очень короткое время жизни, что делает его изучение сложным. Из-за своей радиоактивности и редкости рентгений не имеет практического применения за пределами научных исследований.</textRg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BD%D1%82%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9"><textRg3>Подробнее</textRg3></a>
        `
    }
    else if(element == "Gd" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Gd-info"></div>
        <textGd1>Гадолиний</textGd1>
        <textGd2>Гадолиний (Gd) — это химический элемент с атомным номером 64, принадлежащий к группе лантаноидов в периодической таблице. Он обладает уникальными магнитными свойствами, что делает его важным для использования в различных областях, включая производство магнитно-резонансных томографов (МРТ), в качестве компонента в производстве специальных сплавов и в некоторых типах лазеров. Гадолиний также используется как добавка в стеклодувном производстве и в некоторых типах ядерных реакторов в качестве замедлителя нейтронов.</textGd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8%D0%B9"><textGd3>Подробнее</textGd3></a>
        `
    }
    else if(element == "Cm" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cm-info"></div>
        <textCm1>Кюрий</textCm1>
        <textCm2>Кюрий (Cm) — это радиоактивный химический элемент с атомным номером 96, который относится к актиноидам. Этот элемент был впервые получен в 1944 году группой ученых под руководством Гленна Т. Сиборга. Кюрий используется в научных исследованиях, а также как источник альфа-частиц в радиоизотопных термоэлектрических генераторах, которые обеспечивают энергией космические аппараты. Из-за своей высокой радиоактивности кюрий требует особых мер предосторожности при обращении.
        </textCm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%8E%D1%80%D0%B8%D0%B9"><textCm3>Подробнее</textCm3></a>
        `
    }
    else if(element == "Zn" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Zn-info"></div>
        <textZn1>Цинк</textZn1>
        <textZn2>Цинк (Zn) — это химический элемент с атомным номером 30, который относится к переходным металлам. Цинк играет важную роль в биологических процессах, являясь необходимым элементом для многих ферментов и играя ключевую роль в иммунной системе. В промышленности цинк широко используется для гальванизации железа и стали для защиты от коррозии, в производстве сплавов, таких как латунь, а также в батареях, красках и медицине.</textZn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%BD%D0%BA"><textZn3>Подробнее</textZn3></a>
        `
    }
    else if(element == "Cd" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cd-info"></div>
        <textCd1>Кадмий</textCd1>
        <textCd2>Кадмий (Cd) — это химический элемент с атомным номером 48, который используется в аккумуляторах, пигментах, покрытиях для предотвращения коррозии и в качестве стабилизаторов для пластмасс. Однако его использование ограничено из-за токсичности.</textCd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B4%D0%BC%D0%B8%D0%B9"><textCd3>Подробнее</textCd3></a>
        `
    }
    else if(element == "Hg" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Hg-info"></div>
        <textHg1>Ртуть</textHg1>
        <textHg2>Ртуть (Hg) — это химический элемент с атомным номером 80 в периодической таблице. Она уникальна тем, что при стандартных условиях находится в жидком состоянии. Ртуть широко используется в термометрах, барометрах, флюоресцентных лампах и некоторых электрических выключателях. Однако из-за своей токсичности и способности накапливаться в живых организмах использование ртути во многих приложениях сокращается или регулируется строгими нормами. Ртуть может вызывать серьезные здоровья при вдыхании ее паров или при попадании в организм через пищевую цепочку, особенно в форме метилртути.</textHg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D1%82%D1%83%D1%82%D1%8C"><textHg3>Подробнее</textHg3></a>
        `
    }
    else if(element == "Cn" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cn-info"></div>
        <textCn1>Коперниций</textCn1>
        <textCn2>Коперниций (Cn) - это искусственный элемент, не имеющий стабильных изотопов. Он принадлежит к группе 12 периодической таблицы и является последним элементом 7-го периода. Коперниций был синтезирован впервые в 1996 году российско-американским коллективом ученых в Дубне, Россия. Его название было дано в честь Николая Коперника, известного астронома и математика. Из-за крайне малой продолжительности жизни его изотопов, свойства и химическое поведение Коперниция пока не были полностью изучены.</textCn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%B5%D1%80%D0%BD%D0%B8%D1%86%D0%B8%D0%B9"><textCn3>Подробнее</textCn3></a>
        `
    }
    else if(element == "Td" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Td-info"></div>
        <textTd1>Тербий</textTd1>
        <textTd2>Тербий (Tb) - это элемент, который принадлежит к серии лантаноидов (редкоземельных элементов) в периодической таблице. Его атомный номер 65. Тербий обладает серебристо-белым металлическим блеском и мягкой текстурой. Он был впервые выделен в 1843 году шведским химиком Карлом Густавом Мосьандером из минерала, который называется ytterbite, что впоследствии привело к названию лантаноидов как "иттербий". Тербий используется в различных технологических приложениях, включая производство керамических магнитов, лазерной техники, а также в ядерной энергетике.</textTd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%80%D0%B1%D0%B8%D0%B9"><textTd3>Подробнее</textTd3></a>
        `
    }
    else if(element == "Bk" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Bk-info"></div>
        <textBk1>Берклий</textBk1>
        <textBk2>Берклий (Bk) - это искусственный элемент, который принадлежит к серии актиноидов в периодической таблице. Его атомный номер 97. Берклий является радиоактивным и не имеет стабильных изотопов. Этот элемент был синтезирован впервые в 1949 году учеными из Университета Калифорнии в Беркли (отсюда и происходит его название) путем облучения амплитуды плутония альфа-частицами. Берклий используется в ядерной технологии, в частности, для производства искусственных элементов и в научных исследованиях. Он также имеет потенциал для применения в лечении рака в качестве источника радиоизотопов для лучевой терапии.</textBk2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BA%D0%BB%D0%B8%D0%B9"><textBk3>Подробнее</textBk3></a>
        `
    }
    else if(element == "B" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="B-info"></div>
        <textB1>Бор</textB1>
        <textB2>Бор (B) - это элемент, который находится в группе 13 (также известной как группа трибора) периодической таблицы. Его атомный номер 5. Бор - это металлоид, который обычно обладает прозрачными кристаллами или твердыми, бесцветными до слегка коричневатыми кристаллами, которые могут быть использованы в качестве удобрений, в пиротехнике, стеклянных волокнах, керамике и прочих областях промышленности. Однако его самым известным свойством является способность образовывать кислоты с гидроксидом натрия, что делает его важным компонентом в производстве борной кислоты. Также он используется в ядерной технологии, например, в качестве поглотителя нейтронов.</textB2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80_(%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82)"><textB3>Подробнее</textB3></a>
        `
    }
    else if(element == "Al" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Al-info"></div>
        <textAl1>Алюминий</textAl1>
        <textAl2>Алюминий (Al) - это элемент, который принадлежит к группе 13 периодической таблицы и обладает атомным номером 13. Алюминий является третьим по распространенности элементом в земной коре после кислорода и кремния. Он обладает серебристо-белым металлическим блеском и является легким, прочным и хорошо проводящим тепло и электричество материалом. Алюминий широко используется в различных отраслях промышленности, включая строительство (алюминиевые конструкции и облицовки), производство авиации и автомобилестроение (легкие и прочные каркасы и детали), упаковка (алюминиевые контейнеры и фольга) и многие другие. Важно отметить, что алюминий имеет высокую стойкость к коррозии благодаря покровному слою оксида, который формируется на его поверхности при контакте с воздухом, что делает его еще более привлекательным для использования в различных приложениях.</textAl2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8E%D0%BC%D0%B8%D0%BD%D0%B8%D0%B9"><textAl3>Подробнее</textAl3></a>
        `
    }
    else if(element == "Ga" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ga-info"></div>
        <textGa1>Галлий</textGa1>
        <textGa2>Галлий (Ga) - это элемент группы 13 периодической таблицы с атомным номером 31. Галлий является мягким, серебристо-белым металлом, который плавится при температуре всего лишь около 30°C, что делает его одним из немногих металлов, которые можно расплавить, держа в руке. Это свойство делает галлий уникальным и полезным в различных применениях, таких как в термометрах, технологии жидких линз, электронике и даже в космической промышленности. Он также используется в сплавах, а также в производстве полупроводников, включая светодиоды и лазеры.</textGa2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%BB%D0%B8%D0%B9"><textGa3>Подробнее</textGa3></a>
        `
    }
    else if(element == "In" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="In-info"></div>
        <textIn1>Индий</textIn1>
        <textIn2>Индий (In) - это элемент группы 13 периодической таблицы с атомным номером 49. Индий является мягким, серебристо-белым металлом с низкой температурой плавления. Он используется в различных применениях, включая производство полупроводников, покрытий для зеркал, а также в литейном производстве и в медицине. В последние годы его использование значительно возросло из-за его свойств в индиевом тинтнике, который используется в жидкокристаллических дисплеях (LCD) и плазменных дисплеях (PDP), что делает его критически важным элементом в современной электронике.</textIn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B8%D0%B9"><textIn3>Подробнее</textIn3></a>
        `
    }
    else if(element == "Tl" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Tl-info"></div>
        <textTl1>Таллий</textTl1>
        <textTl2>Таллий (Tl) - это элемент группы 13 периодической таблицы с атомным номером 81. Таллий является мягким, сине-белым металлом, который имеет токсичные свойства и используется в некоторых лекарственных препаратах. Он также используется в электронике, в том числе в производстве инфракрасных датчиков и в ядерной медицине. Одним из наиболее известных свойств таллия является его способность создавать специальный вид стекла, называемый стеклом таллия, который становится жидким при комнатной температуре. Это делает его полезным в различных приложениях, таких как термометры и коммутаторы, а также в лабораторных условиях для создания контейнеров с токсичными веществами.</textTl2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BB%D0%BB%D0%B8%D0%B9"><textTl3>Подробнее</textTl3></a>
        `
    }
    else if(element == "Nh" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Nh-info"></div>
        <textNh1>Нихоний</textNh1>
        <textNh2>Нихоний (Nh) - это искусственный элемент с атомным номером 113 в периодической таблице. Нихоний был синтезирован впервые в 2004 году японско-российским коллективом ученых в Дубне, Россия. Это тяжелый элемент, который имеет очень короткое время жизни изотопов. Поэтому его химические и физические свойства пока не полностью изучены. Научные исследования, связанные с нихонием, в основном направлены на исследование его свойств и влияния на теории ядерной физики и химии.</textNh2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D1%85%D0%BE%D0%BD%D0%B8%D0%B9"><textNh3>Подробнее</textNh3></a>
        `
    }
    else if(element == "Dy" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Dy-info"></div>
        <textDy1>Диспрозий</textDy1>
        <textDy2>Диспрозий (Dy) - это элемент, который принадлежит к серии лантаноидов (редкоземельных элементов) в периодической таблице. Его атомный номер 66. Диспрозий - мягкий, серебристо-белый металл, который обладает высокой плотностью и прочностью. Он имеет несколько важных применений, включая использование в магнитах с высокой температурой, кристаллах, используемых в лазерной технике, а также в производстве ламп и флуоресцентных материалов. Диспрозий также используется в ядерной энергетике и научных исследованиях.</textDy2>
        <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D1%81%D0%BF%D1%80%D0%BE%D0%B7%D0%B8%D0%B9"><textDy3>Подробнее</textDy3></a>
        `
    }
    else if(element == "Cf" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cf-info"></div>
        <textCf1>Калифорний</textCf1>
        <textCf2>Калифорний (Cf) - это искусственный элемент с атомным номером 98 в периодической таблице. Калифорний был синтезирован впервые в 1950 году в Университете Калифорнии в Беркли в результате облучения атомов кюрия альфа-частицами. Это тяжелый, радиоактивный металл, который используется в научных исследованиях и ядерной технологии. Калифорний также имеет потенциал для использования в радионуклидной терапии при лечении рака и в научных исследованиях, включая изучение ядерной структуры и элементарных частиц.</textCf2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D0%B9"><textCf3>Подробнее</textCf3></a>
        `
    }
    else if(element == "C" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="C-info"></div>
        <textC1>Углерод</textC1>
        <textC2>Углерод (C) - это элемент, который находится в группе 14 периодической таблицы с атомным номером 6. Углерод является основой огромного разнообразия химических соединений в природе. Он может образовывать аллотропы, такие как графит, алмаз и фуллерены, каждый из которых обладает уникальными свойствами. Углерод используется в различных отраслях промышленности, включая производство стали, производство материалов для строительства, производство углеродных волокон и композитных материалов, электронику (транзисторы и интегральные схемы) и многие другие области. Более того, углерод играет критическую роль в биохимии, так как он является основным элементом для всех органических соединений, включая жизненно важные молекулы, такие как ДНК и белки.</textC2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A3%D0%B3%D0%BB%D0%B5%D1%80%D0%BE%D0%B4"><textC3>Подробнее</textC3></a>
        `
    }
    else if(element == "Si" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Si-info"></div>
        <textSi1>Кремний</textSi1>
        <textSi2>Кремний (Si) - это элемент, который находится в группе 14 периодической таблицы с атомным номером 14. Кремний является вторым по распространенности элементом в земной коре после кислорода. Он имеет схожие с углеродом химические свойства и также способен образовывать аллотропы, такие как кремний и кремниевый карбид. Кремний широко используется в электронной промышленности для производства полупроводниковых материалов, таких как кремниевые чипы и солнечные батареи. Он также используется в производстве стекла, керамики, а также в металлургии и производстве легких сплавов.</textSi2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D0%BC%D0%BD%D0%B8%D0%B9"><textSi3>Подробнее</textSi3></a>
        `
    }
    else if(element == "Ge" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ge-info"></div>
        <textGe1>Германий</textGe1>
        <textGe2>Германий (Ge) - это элемент, который находится в группе 14 периодической таблицы с атомным номером 32. Германий является полупроводником с сходными химическими свойствами с кремнием и, как и он, используется в электронной промышленности для производства полупроводниковых приборов, таких как транзисторы, диоды и интегральные схемы. Он также находит применение в оптике, в частности, в производстве инфракрасных линз и детекторов. В прошлом германий был используем в телевизионных и радиолампах.</textGe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D0%B9"><textGe3>Подробнее</textGe3></a>
        `
    }
    else if(element == "Sn" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sn-info"></div>
        <textSn1>Олово</textSn1>
        <textSn2>Олово (Sn) - это элемент, который находится в группе 14 периодической таблицы с атомным номером 50. Олово используется в различных областях, включая производство сплавов (например, бронзы и паяльных сплавов), производство плоских стекол и керамики, а также в консервировании пищевых продуктов в виде оловянных консервных банок. Однако его наиболее известное применение - в припоях, благодаря своим свойствам плавления при низких температурах, что делает его идеальным для пайки электронных компонентов.</textSn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%BE%D0%B2%D0%BE"><textSn3>Подробнее</textSn3></a>
        `
    }
    else if(element == "Pb" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Pb-info"></div>
        <textPb1>Свинец</textPb1>
        <textPb2>Свинец (Pb) - это элемент, который находится в группе 14 периодической таблицы с атомным номером 82. Свинец является мягким, плотным и сине-серым металлом. Он имеет ряд применений, включая использование в производстве аккумуляторов (особенно автомобильных), защиты от радиации (например, в рентгеновских экранах и ведрах для радиоактивных материалов), производства сплавов (например, в кровельных материалах и кабельных оболочках) и в некоторых видов металлургии. Свинец также использовался в косметике и в производстве пулевых патронов, хотя его использование в этих областях сократилось из-за его токсичности.</textPb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B8%D0%BD%D0%B5%D1%86"><textPb3>Подробнее</textPb3></a>
        `
    }
    else if(element == "Fl" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Fl-info"></div>
        <textFl1>Флеровий</textFl1>
        <textFl2>Флеровий (Fl) - это искусственный элемент с атомным номером 114 в периодической таблице. Флеровий был синтезирован впервые в 1998 году учеными из Объединенного института ядерных исследований в Дубне, Россия, и Ливерморской национальной лаборатории, США. Это тяжелый, радиоактивный элемент с очень коротким временем жизни изотопов. Флеровий используется в научных исследованиях, в основном в изучении свойств и структуры ядра атома.</textFl2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B5%D1%80%D0%BE%D0%B2%D0%B8%D0%B9"><textFl3>Подробнее</textFl3></a>
        `
    }
    else if(element == "Ho" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ho-info"></div>
        <textHo1>Гольмий</textHo1>
        <textHo2>Гольмий (Hg) - это элемент группы 12 периодической таблицы с атомным номером 80. Гольмий известен как единственный металл, который находится в жидком состоянии при комнатной температуре и давлении. Этот свойство делает его полезным в различных приложениях, таких как в приборах для измерения давления (барометры), термометрах, в калибровке и в некоторых электронных приборах. Однако гольмий также известен своей токсичностью, поэтому его использование в некоторых областях сокращается.</textHo2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D1%8C%D0%BC%D0%B8%D0%B9"><textHo3>Подробнее</textHo3></a>
        `
    }
    else if(element == "Es" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Es-info"></div>
        <textEs1>Эйнштений</textEs1>
        <textEs2>Эйнштейний (Es) - это искусственный элемент с атомным номером 99 в периодической таблице. Эйнштейний был синтезирован впервые в 1952 году учеными из Университета Калифорнии в Беркли, США. Это тяжелый, радиоактивный элемент, который имеет очень короткий срок полураспада. Из-за этого его химические и физические свойства еще не были полностью изучены. Эйнштейний используется в научных исследованиях в области ядерной физики и химии.</textEs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%AD%D0%B9%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD%D0%B8%D0%B9"><textEs3>Подробнее</textEs3></a>
        `
    }
    else if(element == "N" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="N-info"></div>
        <textN1>Азот</textN1>
        <textN2>Азот (N) - это элемент группы 15 периодической таблицы с атомным номером 7. Азот является главным составным элементом в атмосфере Земли и составляет около 78% ее объема. Он встречается в различных органических и неорганических соединениях и имеет ключевое значение для жизни, так как является составной частью белков, нуклеиновых кислот и других жизненно важных органических молекул. Азот также используется в промышленности для синтеза аммиака, который используется в производстве удобрений и других химических веществ.</textN2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D1%82"><textN3>Подробнее</textN3></a>
        `
    }
    else if(element == "P" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="P-info"></div>
        <textP1>Фосфор</textP1>
        <textP2>Фосфор (P) - это элемент группы 15 периодической таблицы с атомным номером 15. Фосфор встречается в различных формах, включая белый, красный и черный фосфор. Он имеет широкий спектр применений, включая использование в сельском хозяйстве в качестве компонента удобрений, в производстве бытовой и промышленной химии, в производстве стекла и керамики, в пиротехнике и многих других областях. Фосфор также является важным элементом в биохимии, так как входит в состав аденозинтрифосфата (ATP), важного источника энергии для клеток.</textP2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%81%D1%84%D0%BE%D1%80"><textP3>Подробнее</textP3></a>
        `
    }
    else if(element == "As" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="As-info"></div>
        <textAs1>Мышьяк</textAs1>
        <textAs2>Мышьяк (As) - это элемент группы 15 периодической таблицы с атомным номером 33. Мышьяк является серым полуметаллическим элементом, который широко используется в промышленности. Он может применяться в производстве полупроводников, взрывчатых веществ, лекарственных препаратов, пестицидов и других химических соединений. Однако мышьяк является ядовитым и может быть опасным при неправильном использовании.</textAs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D1%8C%D1%8F%D0%BA"><textAs3>Подробнее</textAs3></a>
        `
    }
    else if(element == "Sb" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Sb-info"></div>
        <textSb1>Сурьма</textSb1>
        <textSb2>Сурьма (Sb) - это элемент группы 15 периодической таблицы с атомным номером 51. Сурьма является серебристо-белым металлом, который обладает полупроводниковыми свойствами. Он используется в производстве полупроводников, аккумуляторов, пигментов, лекарственных препаратов и других химических соединений. Сурьма также была использована в прошлом для создания специальных сплавов, таких как кармин и типографский сплав, а также в косметических продуктах.</textSb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D1%8C%D0%BC%D0%B0"><textSb3>Подробнее</textSb3></a>
        `
    }
    else if(element == "Bi" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Bi-info"></div>
        <textBi1>Висмут</textBi1>
        <textBi2>Висмут (Bi) - это элемент группы 15 периодической таблицы с атомным номером 83. Висмут является тяжелым металлом, который обладает красноватым оттенком и имеет низкую теплопроводность. Он используется в различных областях, включая производство лекарственных препаратов (например, противогрибковых средств), косметики (например, в косметических пудрах) и в керамической промышленности. Висмут также используется в легированных сплавах, а также в качестве ингредиента в плавках с низкой температурой для припоев.</textBi2>
        <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BC%D1%83%D1%82"><textBi3>Подробнее</textBi3></a>
        `
    }
    else if(element == "Mc" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Mc-info"></div>
        <textMc1>Московий</textMc1>
        <textMc2>Московий (Mc) - это искусственный элемент с атомным номером 115 в периодической таблице. Московий был синтезирован впервые в 2003 году российско-американским коллективом ученых в Дубне, Россия. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада, что делает его химические и физические свойства сложными для изучения. Научные исследования, связанные с московием, в основном направлены на изучение его ядерных свойств и химических реакций.</textMc2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9"><textMc3>Подробнее</textMc3></a>
        `
    }
    else if(element == "Er" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Er-info"></div>
        <textEr1>Эрбий</textEr1>
        <textEr2>Эрбий (Er) - это элемент группы лантаноидов (редкоземельных элементов) в периодической таблице, с атомным номером 68. Эрбий - мягкий, серебристо-белый металл, который относительно стабилен на воздухе. Этот элемент используется в различных технологиях, включая производство лазеров, магнитов, керамики и стекла. Эрбий также добавляется в сплавы, чтобы придать им специфические свойства, такие как устойчивость к высоким температурам и хорошую коррозионную стойкость.</textEr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%AD%D1%80%D0%B1%D0%B8%D0%B9"><textEr3>Подробнее</textEr3></a>
        `
    }
    else if(element == "Fm" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Fm-info"></div>
        <textFm1>Фермий</textFm1>
        <textFm2>Фермий (Fm) - это искусственный элемент с атомным номером 100 в периодической таблице. Фермий был впервые синтезирован в 1952 году учеными из Университета Калифорнии в Беркли, США. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада, что делает его изучение и использование сложными. Фермий используется в научных исследованиях в области ядерной физики и химии, а также в качестве источника радиоизотопов для медицинских исследований.</textFm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D1%80%D0%BC%D0%B8%D0%B9"><textFm3>Подробнее</textFm3></a>
        `
    }
    else if(element == "O" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="O-info"></div>
        <textO1>Кислород</textO1>
        <textO2>Кислород (O) - это элемент группы 16 периодической таблицы с атомным номером 8. Он является одним из самых распространенных элементов в природе и необходим для жизни на Земле. Кислород играет ключевую роль в дыхании организмов, а также в процессе окисления, который предоставляет энергию для многих биологических процессов. Он также широко используется в промышленности, например, в производстве стали, в медицине для поддержания жизненных функций и в различных химических процессах.</textO2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D1%80%D0%BE%D0%B4"><textO3>Подробнее</textO3></a>
        `
    }
    else if(element == "S" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="S-info"></div>
        <textS1>Сера</textS1>
        <textS2>Сера (S) - это элемент группы 16 периодической таблицы с атомным номером 16. Она существует в различных формах, включая твердый серный порошок, желтые кристаллы и серую кристаллическую форму. Сера используется в различных отраслях промышленности, включая производство удобрений (например, суперфосфата), каучука, пластмасс, химических реакций и в производстве материалов для строительства. Она также используется в медицине в качестве противовоспалительного и противомикробного средства. Важно отметить, что сера является ключевым элементом для образования серных соединений, которые важны для жизни и экосистем.</textS2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B0"><textS3>Подробнее</textS3></a>
        `
    }
    else if(element == "Se" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Se-info"></div>
        <textSe1>Селен</textSe1>
        <textSe2>Селен (Se) - это элемент группы 16 периодической таблицы с атомным номером 34. Селен встречается в различных природных материалах, включая почву, воду и некоторые пищевые продукты. Он имеет важное значение для здоровья человека и животных, поскольку является необходимым микроэлементом. Селен используется в промышленности, включая производство стекла и электроники. Он также используется в медицине, включая применение в некоторых препаратах и в качестве антиоксиданта.</textSe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BB%D0%B5%D0%BD"><textSe3>Подробнее</textSe3></a>
        `
    }
    else if(element == "Te" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Te-info"></div>
        <textTe1>Теллур</textTe1>
        <textTe2>Теллур (Te) - это элемент группы 16 периодической таблицы с атомным номером 52. Теллур имеет металлический блеск и является полупроводником. Он имеет различные применения, включая использование в полупроводниковой индустрии для создания фоточувствительных устройств и термоэлектрических преобразователей. Теллур также используется в производстве стекла и керамики, а также в производстве медицинских приборов и препаратов.</textTe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BB%D0%BB%D1%83%D1%80"><textTe3>Подробнее</textTe3></a>
        `
    }
    else if(element == "Po" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Po-info"></div>
        <textPo1>Полоний</textPo1>
        <textPo2>Полоний (Po) - это элемент группы 16 периодической таблицы с атомным номером 84. Полоний является радиоактивным элементом, обладающим высокой токсичностью. Из-за своей радиоактивности полоний используется в некоторых промышленных и научных приложениях, включая использование в статических электростатических генераторах и исследованиях в области ядерной физики. Он также применяется в качестве источника нейтронов и источника электронов для различных экспериментов.</textPo2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BE%D0%BD%D0%B8%D0%B9"><textPo3>Подробнее</textPo3></a>
        `
    }
    else if(element == "Lv" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Lv-info"></div>
        <textLv1>Ливерморий</textLv1>
        <textLv2>Ливерморий (Lv) - это искусственный элемент с атомным номером 116 в периодической таблице. Ливерморий был синтезирован впервые в 2000 году учеными из Ливерморской национальной лаборатории, США, и Объединенного института ядерных исследований в Дубне, Россия. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада. Научные исследования, связанные с ливерморием, в основном направлены на изучение его ядерных свойств и структуры атомного ядра.</textLv2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BC%D0%BE%D1%80%D0%B8%D0%B9"><textLv3>Подробнее</textLv3></a>
        `
    }
    else if(element == "Tm" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Tm-info"></div>
        <textTm1>Тулий</textTm1>
        <textTm2>Тулий (Tm) - это элемент группы лантаноидов (редкоземельных элементов) в периодической таблице, с атомным номером 69. Тулий является мягким, серебристо-белым металлом, который обладает высокой коррозионной стойкостью и устойчивостью к кислотам. Он используется в различных технических приложениях, включая производство лазеров, магнитов и стекла, а также в научных исследованиях, включая изучение магнитных и оптических свойств материалов.</textTm2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BB%D0%B8%D0%B9"><textTm3>Подробнее</textTm3></a>
        `
    }
    else if(element == "Md" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Md-info"></div>
        <textMd1>Менделевий</textMd1>
        <textMd2>Менделевий (Md) - это искусственный элемент с атомным номером 101 в периодической таблице. Менделевий был впервые синтезирован в 1955 году учеными из Института исследования элементарных частиц в Дубне, Россия, и Ливерморской национальной лаборатории, США. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада. Научные исследования, связанные с меднделевием, в основном направлены на изучение его ядерных свойств и структуры атомного ядра, а также на его возможные применения в научных исследованиях и технологии.</textMd2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D0%B4%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B9"><textMd3>Подробнее</textMd3></a>
        `
    }
    else if(element == "F" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="F-info"></div>
        <textF1>Фтор</textF1>
        <textF2>Фтор (F) - это элемент группы 17 периодической таблицы с атомным номером 9. Фтор - это химически активный галоген, который образует соединения с многими другими элементами. Он является наиболее электроотрицательным из всех элементов, что делает его очень реакционным. Фтор используется в различных областях, включая производство пластмасс, стекла, керамики, лекарственных препаратов и многих других химических соединений. Он также добавляется в питьевую воду и зубные пасты для предотвращения кариеса и укрепления зубов.</textF2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A4%D1%82%D0%BE%D1%80"><textF3>Подробнее</textF3></a>
        `
    }
    else if(element == "Cl" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Cl-info"></div>
        <textCl1>Хлор</textCl1>
        <textCl2>Хлор (Cl) - это элемент группы 17 периодической таблицы с атомным номером 17. Хлор - это химически активный галоген, который также образует соединения с многими другими элементами. Он широко используется в промышленности, в частности в производстве пластмасс, хлорированных растворителей, белков и других химических соединений. Хлор также используется для обработки воды для питья и в бассейнах, а также в производстве химических препаратов для очистки и дезинфекции.</textCl2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A5%D0%BB%D0%BE%D1%80"><textCl3>Подробнее</textCl3></a>
        `
    }
    else if(element == "Br" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Br-info"></div>
        <textBr1>Бром</textBr1>
        <textBr2>Бром (Br) - это элемент группы 17 периодической таблицы с атомным номером 35. Бром - это химически активный галоген, который находится в жидком состоянии при комнатной температуре. Он широко используется в промышленности, включая производство фармацевтических препаратов, пестицидов, пластмасс, огнезащитных средств и других химических соединений. Бром также используется в качестве дезинфицирующего средства в водоподготовке и обработке отходов.</textBr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%BE%D0%BC"><textBr3>Подробнее</textBr3></a>
        `
    }
    else if(element == "I" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="I-info"></div>
        <textI1>Йод</textI1>
        <textI2>Йод (I) - это элемент группы 17 периодической таблицы с атомным номером 53. Йод - это химически активный галоген, который широко используется в медицине в качестве антисептика для обработки ран и инфекционных заболеваний. Он также используется в производстве фармацевтических препаратов, пищевых добавок и в некоторых химических процессах. Йод является важным микроэлементом для человеческого здоровья, поскольку играет роль в функционировании щитовидной железы.</textI2>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%BE%D0%B4"><textI3>Подробнее</textI3></a>
        `
    }
    else if(element == "At" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="At-info"></div>
        <textAt1>Астат</textAt1>
        <textAt2>Астат (At) - это элемент группы 17 периодической таблицы с атомным номером 85. Астат является радиоактивным химическим элементом, который редко встречается в природе в свободном состоянии. Он образует различные химические соединения, которые используются в научных исследованиях и медицинских приложениях, включая изучение химических реакций и лечение рака.</textAt2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D1%81%D1%82%D0%B0%D1%82"><textAt3>Подробнее</textAt3></a>
        `
    }
    else if(element == "Ts" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ts-info"></div>
        <textTs1>Теннессин</textTs1>
        <textTs2>Теннессин (Ts) - это искусственный элемент с атомным номером 117 в периодической таблице. Теннессин был впервые синтезирован в 2010 году учеными из Лаборатории Ливермора в США и Объединенного института ядерных исследований в России. Это тяжелый, радиоактивный элемент, который существует только в виде короткоживущих изотопов. Из-за его радиоактивности и недостаточной стабильности он имеет ограниченное применение в научных исследованиях, преимущественно в области изучения ядерных свойств и структуры атомного ядра.</textTs2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BD%D0%BD%D0%B5%D1%81%D1%81%D0%B8%D0%BD"><textTs3>Подробнее</textTs3></a>
        `
    }
    else if(element == "Yb" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Yb-info"></div>
        <textYb1>Иттербий</textYb1>
        <textYb2>Иттербий (Yb) - это элемент группы лантаноидов (редкоземельных элементов) в периодической таблице, с атомным номером 70. Иттербий - это мягкий, серебристо-белый металл, который обладает высокой коррозионной стойкостью. Этот элемент используется в различных технических приложениях, включая производство лазеров, магнитов и часовых механизмов. Также иттербий используется в научных исследованиях, включая изучение магнитных и оптических свойств материалов.</textYb2>
        <a href="https://ru.wikipedia.org/wiki/%D0%98%D1%82%D1%82%D0%B5%D1%80%D0%B1%D0%B8%D0%B9"><textYb3>Подробнее</textYb3></a>
        `
    }
    else if(element == "No" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="No-info"></div>
        <textNo1>Нобелий</textNo1>
        <textNo2>Нобелий (No) - это искусственный элемент с атомным номером 102 в периодической таблице. Нобелий был впервые синтезирован в 1966 году учеными из Объединенного института ядерных исследований в Дубне, Россия. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада. Научные исследования, связанные с нобелием, в основном направлены на изучение его ядерных свойств и структуры атомного ядра, а также на его возможные применения в научных исследованиях и технологии.</textNo2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B1%D0%B5%D0%BB%D0%B8%D0%B9"><textNo3>Подробнее</textNo3></a>
        `
    }
    else if(element == "He" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="He-info"></div>
        <textHe1>Гелий</textHe1>
        <textHe2>Гелий (He) - это элемент группы инертных газов (группа 18) в периодической таблице с атомным номером 2. Он является одним из самых легких элементов и наиболее известен своим неподвижным и инертным поведением. Гелий широко используется в различных областях, включая заполнение воздушных шаров и дыхание в газообразной форме для технических или медицинских приложений. Он также применяется в охлаждении суперпроводящих магнитов и в других областях науки и технологии.</textHe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BB%D0%B8%D0%B9"><textHe3>Подробнее</textHe3></a>
        `
    }
    else if(element == "Ne" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ne-info"></div>
        <textNe1>Неон</textNe1>
        <textNe2>Неон (Ne) - это также элемент группы инертных газов в периодической таблице с атомным номером 10. Как и гелий, неон является инертным газом при комнатной температуре и давлении. Он используется в осветительных приборах, таких как неоновые лампы, из-за своей способности светиться при прохождении электрического тока через него. Неон также применяется в лазерных технологиях и в научных исследованиях, в частности, в спектрометрии масс и атомной спектроскопии.</textNe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BE%D0%BD"><textNe3>Подробнее</textNe3></a>
        `
    }
    else if(element == "Ar" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Ar-info"></div>
        <textAr1>Аргон</textAr1>
        <textAr2>Аргон (Ar) - это элемент группы инертных газов (группа 18) в периодической таблице с атомным номером 18. Аргон - инертный газ, который обладает химической стабильностью и не реагирует с другими элементами. Он широко используется в промышленности, в частности в заполнении ламп накаливания и сварочных шлемов для защиты от оксидации при сварке. Аргон также используется в научных исследованиях, например, в газовой хроматографии и в качестве инертной среды в лабораториях.</textAr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B3%D0%BE%D0%BD"><textAr3>Подробнее</textAr3></a>
        `
    }
    else if(element == "Kr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Kr-info"></div>
        <textKr1>Криптон</textKr1>
        <textKr2>Криптон (Kr) - это также элемент группы инертных газов (группа 18) в периодической таблице с атомным номером 36. Криптон, как и аргон, является инертным газом с химической стабильностью. Он используется в осветительных приборах, включая различные типы ламп, такие как лампы накаливания и флуоресцентные лампы. Криптон также применяется в лазерной технологии, в некоторых типах ядерных реакторов и в специальных видовых аппаратах для медицинских исследований.</textKr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD"><textKr3>Подробнее</textKr3></a>
        `
    }
    else if(element == "Xe" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Xe-info"></div>
        <textXe1>Ксенон</textXe1>
        <textXe2>Ксенон (Xe) - это элемент группы инертных газов (группа 18) в периодической таблице с атомным номером 54. Ксенон, как и другие инертные газы, характеризуется химической инертностью и стабильностью. Его широко используют в различных областях, включая осветительные приборы, лазерную технологию, медицину и научные исследования. Ксенонные лампы применяются в автомобильных фарах, осветительных устройствах и в технике освещения для кино и телевидения. Он также используется в ядерных реакторах в качестве обтекателя и модератора.</textXe2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%81%D0%B5%D0%BD%D0%BE%D0%BD"><textXe3>Подробнее</textXe3></a>
        `
    }
    else if(element == "Rn" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Rn-info"></div>
        <textRn1>Радон</textRn1>
        <textRn2>Радон (Rn) - это химический элемент из группы инертных газов (группа 18) в периодической таблице с атомным номером 86. Радон - радиоактивный газ, который является продуктом распада урана и тория в земной коре. Он может накапливаться в закрытых помещениях и становиться причиной здоровьесберегающих проблем, таких как рак легких, если его уровень превышает безопасные значения. Установка адекватной вентиляции и проведение испытаний на наличие радона в доме помогает снизить риски его накопления.</textRn2>
        <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%BE%D0%BD"><textRn3>Подробнее</textRn3></a>
        `
    }
    else if(element == "Og" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Og-info"></div>
        <textOg1>Оганесон</textOg1>
        <textOg2>Оганесон (Og) - это искусственный элемент с атомным номером 118 в периодической таблице. Оганесон был впервые синтезирован в 2002 году учеными из Орегонского университета и Института ядерных исследований в Дубне, Россия. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада. Научные исследования, связанные с оганесоном, направлены на изучение его ядерных свойств и структуры атомного ядра.</textOg2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B3%D0%B0%D0%BD%D0%B5%D1%81%D0%BE%D0%BD"><textOg3>Подробнее</textOg3></a>
        `
    }
    else if(element == "Lu" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Lu-info"></div>
        <textLu1>Лютеций</textLu1>
        <textLu2>Лютеций (Lu) - это элемент группы лантаноидов (редкоземельных элементов) в периодической таблице, с атомным номером 71. Лютеций - металл, который используется в различных технических приложениях, включая производство лазеров, медицинскую диагностику и исследования. Он также применяется в некоторых типах атомных реакторов.</textLu2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D1%82%D0%B5%D1%86%D0%B8%D0%B9"><textLu3>Подробнее</textLu3></a>
        `
    }
    else if(element == "Lr" && info.classList == "close")
    {
        info.classList.remove("close")
        info.classList.add("active")
        info.innerHTML = `
        <div class="closebutton" onclick="closed()">
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(45deg); position: absolute; left: 450px; top: 20px;"></div>
            <div style="width: 45px; height: 9px; background-color: rgb(67,67,67); transform: rotate(-45deg); position: absolute; left: 450px; top: 20px;"></div>
        </div>
        <div id="Lr-info"></div>
        <textLr1>Лоуренсий</textLr1>
        <textLr2>Лоуренсий (Lr) - это искусственный элемент с атомным номером 103 в периодической таблице. Лоуренсий был впервые синтезирован в 1961 году учеными из Ливерморской национальной лаборатории, США. Это тяжелый, радиоактивный элемент с очень коротким сроком полураспада. Научные исследования, связанные с лоуренсием, направлены на изучение его ядерных свойств и структуры атомного ядра, а также на его возможные применения в научных исследованиях и технологии.</textLr2>
        <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D1%83%D1%80%D0%B5%D0%BD%D1%81%D0%B8%D0%B9"><textLr3>Подробнее</textLr3></a>
        `
    }
}