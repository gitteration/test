// ( ( [ ) ] ] [ ] )
// ( ( { { } } [ ] ) )
// ( { ) [ } ] 음..

/** test data
 * ()
 * (]
 * ()[]{}
 * (({{}}[]))
 * ({{}}[][]()()()){}{[()]}
 * ({{}}[][]()()()){}{[()]
 * ({)[}]
 */

// 풀이
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
(function(){
	rl.on('line', function (line) {
		line = line.trim().replace(/ /g, '');
		if(line.length == 0 || line.length % 2 == 1){
			console.log('입력하신 데이터를 다시 한 번 확인해주세요~');
		}else{
			const result = calculate(line);
			rl.close(console.log(result));
		}
	})
})()

function calculate(line){
	const bracket = { '(' : ')','{' : '}','[' : ']' };
	let temporal_data = [];
	let result = true;
	for(element of line){
		if(element in bracket){
			temporal_data.push(element);
		}else{
			const pop = temporal_data.pop(); 
			if(bracket[pop] !== element){
				result = false;
				break;
			}
		}
	}
	if(temporal_data.length != 0) result = false;
	return result;
}