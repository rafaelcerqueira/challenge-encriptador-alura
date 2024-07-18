document.querySelectorAll('.codedText').forEach((t) => {
    const arr1 = t.innerHTML.split('');
    const arr2 = [];
    arr1.forEach((char, i) => arr2[i] = randChar());

    t.onclick = () => {
        const tl = gsap.timeline();
        let step = 0;
        tl.fromTo(t, {
            innerHTML: arr2.join(''),
        }, {
            duration: arr1.length / 20,
            ease: 'power4.in',
            delay: 0.03,
            onUpdate: () => {
                const p = Math.floor(tl.progress() * (arr1.length));
                if (step != p) {
                    step = p;
                    arr1.forEach((char, i) => arr2[i] = randChar());
                    let pt1 = arr1.join('').substring(p, 0),
                        pt2 = arr2.join('').substring(arr2.length - p, 0);
                    if (t.classList.contains('fromRight')) {
                        pt1 = arr2.join('').substring(arr2.length - p, 0);
                        pt2 = arr1.join('').substring(arr1.length - p);
                    }
                    t.innerHTML = pt1 + pt2;
                }
            }
        });

        gsap.to(t, {
            backgroundColor: '#868E96',
            scale: 0.80,
            duration: 0.07,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        });
    };
});

function randChar() {
    let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
    c = c[Math.floor(Math.random() * c.length)];
    return (Math.random() > 0.5) ? c : c.toUpperCase();
}
