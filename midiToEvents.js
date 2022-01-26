function midiToEvents (midi)
{

	console.log(midi)
	tracks = []

	// CREATE A 2D ARRAY - TRACK, EVENTS
	for(const currentTrack of midi.track)
	{
		newTrack = []

		for(const curentEvent of currentTrack.event)
		{
			if(curentEvent.type === 9)
			{
				newTrack.push(curentEvent);
			}
		}

		if (newTrack.length > 0){
			tracks.push(newTrack)
		}
		
	}

	// [[NOTE, START, DURATION],[ETC]]
	for (const track of tracks)
	{

	}
	console.log(tracks);
	
	return tracks;
}