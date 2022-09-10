import React from 'react';
import profile from '../img/nexus.jpg'
import cryptojack from '../img/cryptojack.jpg'
import du from '../img/DU.jpg'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #0e0e0ec4;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 3px solid #ffffffbd;
background-clip: border-box;
cursor: pointer;
line-height: 29px;
font-size: 20px;
margin-top: 30px;
width:100%;


@media and (max-width: 760px){
    .container{
        backdrop-filter: blur(4px);
    }
  }

.subtitle{
    text-align: center;
    color:grey;
}
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 30%;
`;

const StyledH1 = styled.h1`
    line-heright: 4px;
    letter-spacing: 1.5px;
    text-align: center;
    color: black;
    background: white;
`;

const StyledH3 = styled.h3`
    line-height: 50px;
    letter-spacing: .5px;
    font-size: 29px;
    font-weight: 300;
`;

const Links = styled.div`
    a{
        color:white;
        
    }
    border-radius: 10%;
    padding: 3px 10px;
    background: #2c2c2cb8;
    border: 1px solid white;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 200, 0.8]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const calc2 = (a, b) => [-(b - window.innerHeight / 2) / 200, (a - window.innerWidth / 2) / 200, 0.8]
const trans2 = (a, b, c) => `perspective(600px) rotateX(${a}deg) rotateY(${b}deg) scale(${c})`

const GlassCard = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, .8] , config: config.default}))
    const [props2, set2] = useSpring(() => ({ abc: [0, 0, .8] , config: config.default}))
    const [props3, set3] = useSpring(() => ({ abc: [0, 0, .8] , config: config.default}))

    return (
        <div>
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,.8]})} className="container"
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} /><br/>
            <StyledH1>Decoded Web - Web Development Services ✖</StyledH1><br/>
            <StyledH3 className="subtitle">Website Development Services</StyledH3><br/>
            <StyledH3>Decoded Web provides website and app development services for all brands, businesses and niches. Let a professional build a website for you so you can focus on your real responsibilities. Each of our services include:<br/><br></br>
✅ Website Creation & Setup<br/>
✅ Deployment (Domain + Hosting)<br/>
✅ Inherent SEO Optimization<br/>
✅ Unique UI/UX built following best web development practices<br/><br></br>
Decoded Web utilizes cutting edge technology offered by Next.JS and React to build advanced applications ideal for lead/customer acquisition and retention purposes. Optional add-ons:<br/><br/>
🚀 Website Content Creation<br/>
🚀 Three Free Revisions<br/>
🚀 Secured payment via Stride<br/>
🚀 Direct & Interpersonal Communication with Developer<br/><br/>
Decoded Web assists in transforming your online presence.<br/>
<Links>
Links: <a href='www.decodedweb.us'>www.decodedweb.us</a><br/>
</Links>
                        </StyledH3>
        </Container>
        <Container
            onMouseMove={({clientX: a, clientY: b}) => (set2({abc: calc2(a, b)}))}
            onMouseLeave={() => set2({abc:[0,0,.8]})}
            style={{
                transform: props2.abc.interpolate(trans2)
            }}
        >
            <StyledImg src={du} /><br/>
            <StyledH1>Decentralized United 💱</StyledH1><br/>
            <StyledH3 className="subtitle">Gas Free is the first trade to earn swap by DCU</StyledH3><br/>
            <StyledH3>Gas Free is the first trade to earn swap by DCU<br /><br/>

Get cash/crypto back on crypto purchases with the gas free Covering the gas fees and instantly putting you in profit on your purchases. Covering the gas fees and instantly putting you in profit on your purchases.<br /><br/>

$DCU is a community driven token with burnt liquidity and rewards in busd just for holding the token. $dcu will be releasing different unique utilities to the blockchain space like gasfree swap, anonymous bridge and root layer yielding. we stand by our motto for the community, by the community & to the community
                        </StyledH3>
        </Container>
        <Container
            onMouseMove={({clientX: a, clientY: b}) => (set3({abc: calc2(a, b)}))}
            onMouseLeave={() => set3({abc:[0,0,.8]})} className='container'
            style={{
                transform: props3.abc.interpolate(trans2)
            }}
        >
            <StyledImg src={cryptojack} /><br/>
            <StyledH1>CRYPTO JACKPOT 💵</StyledH1><br/>
            <StyledH3 className="subtitle">A global lottery ticket that never expire</StyledH3><br/>
            <StyledH3>Total Supply - 1.75b<br/><br/>
First decentralized global lottery ticket that never expires<br/>
Maintain a minimum of $50 in your wallet to qualify for biggest jackpot pools<br/>
No sell offs jackpot tax gets collected in busd<br/>
Pay outs in 💵BUSD💵💥<br/>
Multiple wallets = multiple entries<br/>
Weekly live jackpots<br/>
Multiple winners<br/>
Aiming for a $1m jackpot in 2022<br/>
Grow your investments while having a chance to win jackpots<br/>
Audited by Elite Security✅<br/>
Fully doxxed team✅<br/>
Core team only holds under 10% of total supply ✅<br/>
Team wallets locked for 10 months ✅<br/><br/>
Tokenomics: Buy Tax: 15%<br/>
3% LP<br/>
2% Marketing<br/>
10% 💵Jackpots💵</StyledH3>
        </Container>
        </div>
    );
}

export default GlassCard;