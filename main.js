const radioBtn=document.querySelectorAll(".slides input");
const manualBtn=document.querySelectorAll(".nav-manual label");
const nextBtn=document.querySelector(".next-btn");
const init=radioBtn[0].checked=true;
const revBtn=document.querySelector(".rev-btn");
const radioBtnItem=document.querySelectorAll('.img-item input')
const initItem=radioBtnItem[0].checked=true;
const manualBtnItem=document.querySelectorAll(".item-manual label");
const nextCategoryBtn=document.getElementById("ca-next-btn-id")
const revCategoryBtn=document.getElementById("ca-rev-btn-id")
const categoryItem=document.getElementById("ca-item-id")
const proNextBtn=document.getElementById("pro-next-btn-id")
const proRevBtn=document.getElementById("pro-rev-btn-id")
const proListB=document.getElementById("product-content-list-b")
const timeDozen=document.getElementById("time-dozen")
const timeUnit=document.getElementById("time-unit")
const minuteDozen=document.getElementById("minute-dozen")
const minuteUnit=document.getElementById("minute-unit")
const secondDozen=document.getElementById("second-dozen")
const secondUnit=document.getElementById("second-unit")
const nextBtnItem=document.getElementById("item-next-btn-id")
const revBtnItem=document.getElementById("item-rev-btn-id")
const itemContentSection=document.getElementById("item-content-section")
const topTrendNext=document.getElementById("top-next-btn-id")
const topTrendRev=document.getElementById("top-rev-btn-id")
const topSearchContent=document.getElementById("top-search-content")



const app={
    index:0,
    indexItem:0,
    tranValue:0,
    tranValueItem:0,
    topValue:0,
    countdownTimeDozen:0,
    countdownTimeUnit:0,
    countdownMinuteDozen:0,
    countdownMinuteUnit:0,
    countdownSecondDozen:0,
    countdownSecondUnit:0,
    time:{
        secondUnit:-100,
        secondDozen:-100,
        minuteUnit:-100,
        minuteDozen:-100,
        timeUnit:-200,
        timeDozen:0
    },

    nextRadio(){
        this.getAttributesRadio()
        this.index++;
        if(this.index>radioBtn.length-1)
        {
            this.index=0;
        }
    },
    revRadio(){
        this.getAttributesRadio()
        this.index--;
        if(this.index<0)
        {
            this.index=radioBtn.length-1;
        }
        
    },
    nextRadioItem(){
        this.getAttributesRadioItem()
        this.indexItem++
        if(this.indexItem>radioBtnItem.length-1){
            this.indexItem=0
        }
        console.log(this.indexItem)
    },
    autoRadioItem(){
        const _this = this
        setInterval(function(){
            _this.nextRadioItem()
            if(radioBtnItem[_this.indexItem].checked!==true){
                radioBtnItem[_this.indexItem].checked=true
            }
        },5000)
    },
    handleEvent(){
        const _this=this
        nextBtn.onclick = function(){
            _this.nextRadio();
                if(radioBtn[_this.index].checked!==true){
                    radioBtn[_this.index].checked=true;
                }
        }
        revBtn.onclick = function(){
            _this.revRadio();
                if(radioBtn[_this.index].checked!==true){
                    radioBtn[_this.index].checked=true;
                }
        }
        nextCategoryBtn.onclick= function(){
            nextCategoryBtn.style.display="none"
            revCategoryBtn.style.display="block"
            categoryItem.style.transform="translateX(-15.5%)"
        }
        revCategoryBtn.onclick= function(){
            nextCategoryBtn.style.display="block"
            revCategoryBtn.style.display="none"
            categoryItem.style.transform="translateX(0)"
        }
        
        proNextBtn.onclick= function(){
            _this.tranValue=_this.tranValue-33.3333
            proListB.style.transform=`translateX(${_this.tranValue}%)`
            _this.checkTranslateX()
            
        }

        proRevBtn.onclick= function(){
            _this.tranValue=_this.tranValue+33.3333
            proListB.style.transform=`translateX(${_this.tranValue}%)`
            _this.checkTranslateX()
        }
        nextBtnItem.onclick= function(){
            _this.tranValueItem=_this.tranValueItem-33.3333
            itemContentSection.style.transform=`translateX(${_this.tranValueItem}%)`
            _this.checkTranslateXItem()
            
        }

        revBtnItem.onclick= function(){
            _this.tranValueItem=_this.tranValueItem+33.3333
            itemContentSection.style.transform=`translateX(${_this.tranValueItem}%)`
            _this.checkTranslateXItem()
        }
        topTrendNext.onclick= function(){
            _this.topValue=_this.topValue-33.3333
            topSearchContent.style.transform=`translateX(${_this.topValue}%)`
            _this.checkTranslateTop()
        }

        topTrendRev.onclick= function(){
            _this.topValue=_this.topValue+33.3333
            topSearchContent.style.transform=`translateX(${_this.topValue}%)`
            _this.checkTranslateTop()
        }
    },
    getAttributesRadio(){
        const _this = this
        for(const i of manualBtn){
            i.onclick=function(e){
                const atIndex=i.getAttribute('id')
                _this.index=atIndex
            }
        }
    },
    getAttributesRadioItem(){
        const _this = this
        for(const i of manualBtnItem){
            i.onclick=function(e){
                const atIndex=i.getAttribute('id')
                _this.indexItem=atIndex
            }
        }
    },
    checkTranslateX(){
        if(this.tranValue===-66.6666){
            proNextBtn.style.display="none"
        }
        else
        {
            proNextBtn.style.display="block"
        }
        if(this.tranValue===0)
        {
            proRevBtn.style.display="none"
        }
        else
        {
            proRevBtn.style.display="block"
        }
    },
    checkTranslateTop(){
        if(this.topValue===-66.6666){
            topTrendNext.style.display="none"
        }
        else
        {
            topTrendNext.style.display="block"
        }
        if(this.topValue===0)
        {
            topTrendRev.style.display="none"
        }
        else
        {
            topTrendRev.style.display="block"
        }
    },
    checkTranslateXItem(){
        if(this.tranValueItem===-66.6666){
            nextBtnItem.style.display="none"
        }
        else
        {
            nextBtnItem.style.display="block"
        }
        if(this.tranValueItem===0)
        {
            revBtnItem.style.display="none"
        }
        else
        {
            revBtnItem.style.display="block"
        }
    },
    autoRadio(){
        const _this=this
        setInterval(function(){
                _this.nextRadio();
                if(radioBtn[_this.index].checked!==true)
                {
                    radioBtn[_this.index].checked=true;
                }
            },5000)
    },
    getCountDown({secondUnit,secondDozen,minuteUnit,minuteDozen,timeUnit,timeDozen}){
        this.countdownSecondUnit=secondUnit
        this.countdownSecondDozen=secondDozen
        this.countdownMinuteUnit=minuteUnit
        this.countdownMinuteDozen=minuteDozen
        this.countdownTimeUnit=timeUnit
        this.countdownTimeDozen=timeDozen
    }
    ,
    countDown(){
        if(this.countdownTimeUnit===0&&this.countdownTimeDozen===0&&this.countdownMinuteDozen===0&&this.countdownMinuteUnit===0&&this.countdownSecondDozen===0&&this.countdownSecondUnit===0)
        {

        }
        else{
        this.countdownSecondUnit-=100
        if(this.countdownSecondUnit<-900)
        {
            this.countdownSecondUnit=0
        }
        if(this.countdownSecondUnit===-100)
        {
            this.countdownSecondDozen-=100
        }
        if(this.countdownSecondDozen<-500)
        {
            this.countdownSecondDozen=0
        }
        if(this.countdownSecondDozen===-100&&this.countdownSecondUnit===-100)
        {
            this.countdownMinuteUnit-=100
        }
        if(this.countdownMinuteUnit<-900)
        {
            this.countdownMinuteUnit=0
        }
        if(this.countdownMinuteUnit===-100&&this.countdownSecondDozen===-100&&this.countdownSecondUnit===-100)
        {
            this.countdownMinuteDozen-=100
        }
        if(this.countdownMinuteDozen<-500)
        {
            this.countdownMinuteDozen=0
        }
        if(this.countdownMinuteUnit===-100&&this.countdownMinuteDozen===-100&&this.countdownSecondDozen===-100&&this.countdownSecondUnit===-100)
        {
            this.countdownTimeUnit-=100
        }
        if(this.countdownTimeUnit<-900)
        {
            this.countdownTimeUnit=0
        }
        if(this.countdownTimeUnit===-100&&this.countdownMinuteUnit===-100&&this.countdownMinuteDozen===-100&&this.countdownSecondDozen===-100&&this.countdownSecondUnit===-100)
        {
            this.countdownTimeDozen-=100
        }
        if(this.countdownTimeDozen<-200)
        {
            this.countdownTimeDozen=0
        }
    }
}
,
    setCountdown(){
        secondUnit.style.transform=`translateY(${this.countdownSecondUnit}%)`
        secondDozen.style.transform=`translateY(${this.countdownSecondDozen}%)`
        minuteUnit.style.transform=`translateY(${this.countdownMinuteUnit}%)`
        minuteDozen.style.transform=`translateY(${this.countdownMinuteDozen}%)`
        timeUnit.style.transform=`translateY(${this.countdownTimeUnit}%)`
        timeDozen.style.transform=`translateY(${this.countdownTimeDozen}%)`
        this.countdownSecondUnit!==0?secondUnit.style.transition="all linear .5s":secondUnit.style.transition="none"
        this.countdownSecondDozen!==0?secondDozen.style.transition="all linear .5s":secondDozen.style.transition="none"
        this.countdownMinuteUnit!==0?minuteUnit.style.transition="all linear .5s":minuteUnit.style.transition="none"
        this.countdownMinuteDozen!==0?minuteDozen.style.transition="all linear .5s":minuteDozen.style.transition="none"
        this.countdownTimeUnit!==0?timeUnit.style.transition="all linear .5s":timeUnit.style.transition="none"
        this.countdownTimeDozen!==0?timeDozen.style.transition="all linear .5s":timeDozen.style.transition="none"
    },
    autoCountDown(){
        const _this = this
        const autoTime=setInterval(function(){
            _this.setCountdown()
            _this.countDown()
        },1000)
    },
    start(){
        this.handleEvent()
        this.autoRadio()
        this.autoRadioItem()
        this.getCountDown(this.time)
        this.autoCountDown()
        // this.setCountdown()
        // this.countDown()
    }
}
app.start()
