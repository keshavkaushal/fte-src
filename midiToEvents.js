function midiToEvents ()
{
	graphics = this.add.graphics();

	const midiin = this.add.text(50, 50, 'atari', '', 16);
	midiin.setText(['MIDI']);
	midiin.setFontSize(60);
	midiin.setInteractive().on('pointerdown', () => document.getElementById('filereader').click() );
}