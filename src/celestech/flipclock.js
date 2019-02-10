import React, {Component} from 'react';
import './flipclock.sass';

// function component
const AnimatedCard = ({ position, animation, digit }) => {
  return(
    <div className={`flipCard ${position} ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return(
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};


const FlipUnitContainer = ({ digit, shuffle, unit }) => {	
  
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit+1;

  // to prevent a negative value
  if ( unit !== 'hours') {
    previousDigit = previousDigit === -1 
      ? 59 
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1 
      ? 23 
      : previousDigit;
  }

  // add zero
  if ( currentDigit < 10 ) {
    currentDigit = `0${currentDigit}`;
  } 
  if ( previousDigit < 10 ) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle 
    ? previousDigit 
    : currentDigit;
  const digit2 = !shuffle 
    ? previousDigit 
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle 
    ? 'fold' 
    : 'unfold';
  const animation2 = !shuffle 
    ? 'fold' 
    : 'unfold';

  return(
    <div className={'flipUnitContainer'}>
      <StaticCard 
        position={'upperCard'} 
        digit={currentDigit} 
        />
      <StaticCard 
        position={'lowerCard'} 
        digit={previousDigit} 
        />
      <AnimatedCard 
        position={'first'}
        digit={digit1}
        animation={animation1}
        />
      <AnimatedCard 
        position={'second'}
        digit={digit2}
        animation={animation2}
        />
    </div>
  );
};

class FlipClock extends Component {
	
  constructor(props) {
		super(props);
		this.state = {
      days:0,
      daysShuffle:true,
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true
		};
	}
  
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			100
		);
	}
  
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
  
	updateTime() {
		// get new date
    let toD = this.props.count_to.split(":");
		const time = new Date((new Date(this.props.count_to)).getTime()-(new Date()).getTime());
		// set time units
    const days = time.getDate();
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		// on hour chanage, update hours and shuffle state
    if( days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({
        days,
        daysShuffle
      });
    }
		if( hours !== this.state.hours) {
			const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours,
				hoursShuffle
			});
		}
		// on minute chanage, update minutes and shuffle state
		if( minutes !== this.state.minutes) {
			const minutesShuffle = !this.state.minutesShuffle;
			this.setState({
				minutes,
				minutesShuffle
			});
		}
		// on second chanage, update seconds and shuffle state
		if( seconds !== this.state.seconds) {
			const secondsShuffle = !this.state.secondsShuffle;
			this.setState({
				seconds,
				secondsShuffle
			});
		}
	}
  
	render() {
    
    // state object destructuring
		const {
      days, 
      hours, 
      minutes, 
      seconds,
      daysShuffle, 
      hoursShuffle, 
      minutesShuffle, 
      secondsShuffle 
    } = this.state;
		
    return(
			<div className={'flipClock'}>
				<FlipUnitContainer 
          unit={'days'}
          digit={days} 
          shuffle={daysShuffle} 
          />
        <FlipUnitContainer 
					unit={'hours'}
					digit={hours} 
					shuffle={hoursShuffle} 
					/>
				<FlipUnitContainer 
					unit={'minutes'}
					digit={minutes} 
					shuffle={minutesShuffle} 
					/>
				<FlipUnitContainer 
					unit={'seconds'}
					digit={seconds} 
					shuffle={secondsShuffle} 
					/>
			</div>
		);
	}
}

export default FlipClock;