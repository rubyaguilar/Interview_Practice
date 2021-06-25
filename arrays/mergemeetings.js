

function bubbleSortTimes(meetings){

    for(let i = 0; i < meetings.length-1; i++){
        if(meetings[i].startTime > meetings[i+1].startTime){
            let copy = meetings[i]
            meetings[i] = meetings[i+1]
            meetings[i+1] = copy
        }
    }

    return meetings
}

function mergeMeetings(meetings){

    meetings = bubbleSortTimes(meetings)

    for(let i = 0; i < meetings.length-1; i++){
        if (meetings[i].startTime <= meetings[i+1].startTime &&
            meetings[i].endTime >= meetings[i+1].endTime ) {
            meetings.splice(i+1, 1)
            i--
        }
        else if( (meetings[i].endTime >= meetings[i+1].startTime) ){
            meetings[i].endTime = meetings[i+1].endTime
            meetings.splice(i+1, 1)
            i--
        }
    }

    return meetings;
}

const meetings = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 5 },
    { startTime: 6, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 }]

console.log(mergeMeetings(meetings))