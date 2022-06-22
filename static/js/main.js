
/*
code from
http://opensourcehacker.com/2011/12/01/calculate-aspect-ratio-conserving-resize-for-images-in-javascript/
*/


function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }



function ResizeImagesToFitRatio(imgList, maxHeight, maxWidth){
    console.log('height', maxHeight);
    console.log('width', maxWidth );
    for (var img in imgList){
        console.log('image', img , imgList[img])
        var srcHeight = imgList[img].height;
        var srcWidth = imgList[img].width
          
        var imgRatio = calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight)

        console.log('ratio',imgRatio)
        imgList[img].height = imgRatio.height;
        imgList[img].width = imgRatio.width;
    }
}

function ResizeColumns(){
    var columnList = this.document.getElementsByClassName('bi')
    console.log('Column list props')
    

    for (let i = 0; i < columnList.length; i +=2 ){
      var leftColumn = columnList[i];
      var rightColumn = columnList[i+1];

      console.log('left height', leftColumn.offsetHeight )
      console.log('right height', rightColumn.offsetHeight )
      console.log('left width', leftColumn.offsetWidth )
      console.log('right width', rightColumn.offsetWidth )

      if (leftColumn.offsetHeight != rightColumn.offsetHeight ){
        if (leftColumn.offsetHeight > rightColumn.offsetHeight){
          rightColumn.setAttribute('offsetHeight', leftColumn.offsetHeight)
          //rightColumn.style.height = leftColumn.offsetHeight;
          console.log('Left side bigger. setting right side to' , leftColumn.offsetHeight )
        }else{
          leftColumn.setAttribute('offsetHeight', rightColumn.offsetHeight)
          console.log('right side bigger')
        }
      }else{
        console.log('columns', i, 'and', i+1, 'are the same height')
      }
      
      if (leftColumn.offsetWidth != rightColumn.offsetWidth ){
        if (leftColumn.offsetWidth > rightColumn.offsetWidth){
          rightColumn.setAttribute('offsetWidth', leftColumn.offsetWidth)
          console.log('Left side bigger')
        }else{
          leftColumn.setAttribute('offsetWidth', rightColumn.offsetWidth)

          console.log('right side bigger')
        }
      }else{
        console.log('columns', i, 'and', i+1, 'are the same width')
      }
    }

  }


 export {ResizeImagesToFitRatio}