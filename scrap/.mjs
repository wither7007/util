q=(`5,A,clap
83,S,highat
68,D,kick
70,F,openhat
72,G,boom
74,J,snare
75,K,tom
76,L,tink
`)
function st(ring) {
    n = ring.split('\n')
    return n;
}
r=st(q)
s=[]
pp=r.forEach(j=>s.push(j.split(',')))
function aa(one) {
    vx = []
    one.forEach(e => {
        vx.push([`<div> ${e[0]} </div>`])
    });
    return vx.join('\n')
}
console.log(s.map((i)=>`<div data-key=${i[0]} class="key">
      <kbd>${i[1]}</kbd>
      <span class="sound">${i[2]}</span>
    </div>`).join('\n'))