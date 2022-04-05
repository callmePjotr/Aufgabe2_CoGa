const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var xdmin = -1.6;
var xddelta = 3.2;
var ydmin = -1.6;
var yddelta = 3.2;


var xp, xpmin = 0; 
var xpdelta = 700;
var yp, ypmin = 0;
var ypdelta = 700;

var xd;
var yd;

function JuliaMalen(){
		


		for (xp = 0; xp < 700; xp++) {
			for (yp = 0; yp < 700; yp++) {
				xd = xdmin + xp * xddelta / xpdelta;
				yd = ydmin + yp * yddelta / ypdelta;
				var a_alt = xd;
				var b_alt = yd;
				var a_neu, b_neu;
				var n;
				var ab2;

				for (n = 1; n < 255; n++) {
					a_neu = a_alt * a_alt - b_alt * b_alt - 0.75;
					b_neu = 2 * a_alt * b_alt + 0.06;
					b_alt = b_neu;
					a_alt = a_neu;
					ab2 = a_neu * a_neu + b_neu * b_neu;
					if (ab2 > 4) {
						break;
					}


				}
				if (ab2 > 4) {
                    ctx.fillStyle = "rgb(" + n + "," + ab2 + "," + n + ")";
                    ctx.fillRect(xp, yp, 1, 1);
				}
				else {
                    ctx.fillStyle = "rgb(0,0,0)";
                    ctx.fillRect(xp, yp, 1, 1);
				}
			}
		}
	}


function zoomIN()
{
	// TODO: Fügen Sie hier Ihren Meldungshandlercode ein, und/oder benutzen Sie den Standard.

	 xd = xdmin + 350 * xddelta / 700.;
	 yd = ydmin +  350* yddelta / 700.;

	xddelta = xddelta / 2;
	yddelta = yddelta / 2;

	xdmin = xd - xddelta / 2;
	ydmin = yd - yddelta / 2;

	
	JuliaMalen();
}


function zoomOUT()
{
	// TODO: Fügen Sie hier Ihren Meldungshandlercode ein, und/oder benutzen Sie den Standard.

	xd = xdmin + 350 * xddelta / 700.;
	yd = ydmin + 350 * yddelta / 700.;

	xddelta = xddelta * 2;
	yddelta = yddelta * 2;

	xdmin = xd - xddelta / 2;
	ydmin = yd - yddelta / 2;
    JuliaMalen();
}


