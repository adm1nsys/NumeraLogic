body = document.body;
body.style.background = "black";
body.style.alignItems = "center";
body.style.alignContent = "center";
body.style.justifyItems = "start";
body.style.justifyContent = "start";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.margin = "0px";

const homepage1page = document.createElement("div");
homepage1page.style.display = "flex";
homepage1page.style.flexDirection = "column";
homepage1page.style.fontFamily = "Roboto-Thin";
homepage1page.style.fontSize = "500%";
homepage1page.style.width = "100%";
homepage1page.style.height = "100vh";
homepage1page.style.position = "relative";
homepage1page.style.color = "white";
homepage1page.style.alignItems = "center";
homepage1page.style.alignContent = "center";
homepage1page.style.justifyItems = "center";
homepage1page.style.justifyContent = "center";
homepage1page.style.transition = "4s";
homepage1page.style.background = "linear-gradient(to top, rgb(0, 0, 0), rgb(0, 163, 255))";


document.body.appendChild(homepage1page);




function getFontSizeRelativeToWindow1(baseSize) {
    return (window.innerWidth * baseSize / 1000);
}

const homepage1paget = document.createElement("div");
homepage1paget.textContent = "NumeraLogic";
homepage1paget.style.fontSize = getFontSizeRelativeToWindow(55, 55, 200);
homepage1page.appendChild(homepage1paget);

const homepage1paget1 = document.createElement("div");
homepage1paget1.textContent = "Simplify Complex Calculations, Swiftly and Reliably!";
homepage1paget1.style.fontSize = getFontSizeRelativeToWindow(13, 13, 200); 
homepage1paget1.style.opacity = "0.5";
homepage1page.appendChild(homepage1paget1);


const homepage1pageb0 = document.createElement("div");
homepage1pageb0.style.border = "2px solid white";
homepage1pageb0.style.fontSize = "20px"
homepage1pageb0.style.padding = "10px"
homepage1pageb0.style.marginTop = "20px"
homepage1pageb0.style.display = "flex"
homepage1pageb0.style.flexDirection = "row"
homepage1pageb0.style.transition = "1s"
homepage1page.appendChild(homepage1pageb0);

homepage1pageb0.addEventListener('mouseover', function() {
    homepage1pageb0.style.opacity = "0,5";
homepage1pageb0.style.textDecoration = "underline";
homepage1pageb0.style.cursor = "pointer";
homepage1pageb0.style.background = "rgba(255, 255, 255, 0.2)";
});
homepage1pageb0.addEventListener('mouseout', function() {
    homepage1pageb0.style.opacity = "1";
homepage1pageb0.style.textDecoration = "none";
homepage1pageb0.style.cursor = "normal";

homepage1pageb0.style.background = "rgba(255, 255, 255, 0)";
});
homepage1pageb0.addEventListener('mousedown', function() {
    homepage1pageb0.style.opacity = "0.3";
});
homepage1pageb0.addEventListener('mouseup', function() {
       homepage1pageb0.style.opacity = "1";

});

  homepage1pageb0.addEventListener('click', function() {
    window.location.href = macv;
});
  const leftBarC0 = document.createElement("div");
leftBarC0.style.display = "flex";
leftBarC0.style.flexDirection = "column";
leftBarC0.style.height = "21px";
leftBarC0.style.width = "21px";
leftBarC0.style.position = "relative";
leftBarC0.style.zIndex = "999";
homepage1pageb0.appendChild(leftBarC0);
const svglogo = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M540.166 339.323H483.834C404.707 339.323 330.017 358.318 264.073 391.996C234.142 407.282 206.012 425.594 180.088 446.528C70.2498 535.222 0 670.986 0 823.157C0 843.684 16.6398 860.323 37.166 860.323H986.834C1007.36 860.323 1024 843.684 1024 823.157C1024 670.986 953.75 535.222 843.912 446.528C817.988 425.594 789.858 407.282 759.927 391.996C693.983 358.318 619.293 339.323 540.166 339.323ZM300 703.323C327.614 703.323 350 680.938 350 653.323C350 625.709 327.614 603.323 300 603.323C272.386 603.323 250 625.709 250 653.323C250 680.938 272.386 703.323 300 703.323ZM723 703.323C750.614 703.323 773 680.938 773 653.323C773 625.709 750.614 603.323 723 603.323C695.386 603.323 673 625.709 673 653.323C673 680.938 695.386 703.323 723 703.323Z" fill="url(#paint0_linear_56_4)"/>
<path d="M146.301 188.008C132.494 164.094 101.915 155.9 78 169.707C54.0854 183.514 45.8916 214.094 59.6987 238.008L180.088 446.528C206.012 425.594 234.142 407.282 264.073 391.996L146.301 188.008Z" fill="url(#paint1_linear_56_4)"/>
<path d="M964.301 238.008C978.108 214.094 969.915 183.514 946 169.707C922.085 155.9 891.506 164.094 877.699 188.008L759.927 391.996C789.858 407.282 817.988 425.594 843.912 446.528L964.301 238.008Z" fill="url(#paint2_linear_56_4)"/>
<defs>
<linearGradient id="paint0_linear_56_4" x1="1024" y1="163" x2="4.89075e-05" y2="860" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.28125" stop-color="white" stop-opacity="0.46"/>
<stop offset="0.458333" stop-color="white" stop-opacity="0.35"/>
<stop offset="0.713542" stop-color="white" stop-opacity="0.48"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint1_linear_56_4" x1="1024" y1="163" x2="4.89075e-05" y2="860" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.28125" stop-color="white" stop-opacity="0.46"/>
<stop offset="0.458333" stop-color="white" stop-opacity="0.35"/>
<stop offset="0.713542" stop-color="white" stop-opacity="0.48"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear_56_4" x1="1024" y1="163" x2="4.89075e-05" y2="860" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="0.28125" stop-color="white" stop-opacity="0.46"/>
<stop offset="0.458333" stop-color="white" stop-opacity="0.35"/>
<stop offset="0.713542" stop-color="white" stop-opacity="0.48"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

`;
const svglogoc = document.createElement('div');
svglogoc.innerHTML = svglogo;

const svglogoelement = svglogoc.querySelector('svg');
svglogoelement.style.marginLeft = '0px';
svglogoelement.style.marginTop = '2px';
svglogoelement.style.width = '20px';
svglogoelement.style.height = '20px';
svglogoelement.style.position = 'absolute';
leftBarC0.appendChild(svglogoc);
const homepage1pageb0t0 = document.createElement("div");
homepage1pageb0t0.textContent = "Download";
homepage1pageb0t0.style.fontFamily = "Roboto-Regular"
homepage1pageb0t0.style.fontSize = "20px"
homepage1pageb0t0.style.marginLeft = "5px"
homepage1pageb0.appendChild(homepage1pageb0t0);





var btn = document.createElement("a");
btn.textContent = "Go to GitHub repo";
btn.style.position = "absolute";
btn.style.bottom = "10px";
btn.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
btn.style.color = "white";
btn.style.opacity = "0.5";
btn.style.textDecoration = "none";
btn.style.transition = "1s";

btn.addEventListener('click', function() {
    window.location.href = "https://github.com/administrati0n/http-master";
});

btn.addEventListener('mouseover', function() {
    btn.style.opacity = "1";
btn.style.textDecoration = "underline";
btn.style.cursor = "pointer";
});

btn.addEventListener('mouseout', function() {
    btn.style.opacity = "0.5"; 
btn.style.textDecoration = "none";
btn.style.cursor = "normal";

});

btn.addEventListener('mousedown', function() {
    btn.style.opacity = "0.3";
});

btn.addEventListener('mouseup', function() {
       btn.style.opacity = "1";

});

homepage1page.appendChild(btn);

var btn1 = document.createElement("a");
btn1.textContent = "Go to Admin inc.";
btn1.style.position = "relative";
btn1.style.fontFamily = "Roboto-Thin";
btn1.style.bottom = "10px";
btn1.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
btn1.style.color = "white";
btn1.style.opacity = "0.5";
btn1.style.textDecoration = "none";
btn1.style.marginTop = "10px";
btn1.style.transition = "1s";

btn1.addEventListener('click', function() {
    window.location.href = "https://github.com/adm1nsys/NumeraLogic/releases/tag/NumeraLogic";
});

btn1.addEventListener('mouseover', function() {
    btn1.style.opacity = "1"; 
btn1.style.textDecoration = "underline";
btn1.style.cursor = "pointer";
});

btn1.addEventListener('mouseout', function() {
    btn1.style.opacity = "0.5"; 
btn1.style.textDecoration = "none";
btn1.style.cursor = "normal";

});

btn1.addEventListener('mousedown', function() {
    btn1.style.opacity = "0.3"; 
});

btn1.addEventListener('mouseup', function() {
       btn1.style.opacity = "1";

});
document.body.appendChild(btn1);

var footer = document.createElement("div");
footer.style.width = "100%";
footer.style.height = "50px";
footer.style.background = "black";
footer.style.alignItems = "center";
footer.style.alignContent = "center";
footer.style.justifyItems = "center";
footer.style.justifyContent = "center";
footer.style.display = "flex";
footer.style.fontSize = getFontSizeRelativeToWindow(15, 15, 200);
footer.style.fontFamily = "Roboto-Thin";
footer.style.color = "#006095";
document.body.appendChild(footer);
function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}

function updateYear() {
  const currentYear = getCurrentYear();
  var footert = document.createElement("div");
  footert.textContent = `© Copyright By NumeraLogic 2023 - ${currentYear}`; 

  footer.appendChild(footert);
}

updateYear();
