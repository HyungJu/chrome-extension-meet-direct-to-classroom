
const selectors = {
	actionButtons: '[data-tooltip][data-is-muted]',
	participantId: '[data-initial-participant-id]',
};

const codes = {
	eng24: 'https://classroom.google.com/u/0/c/MTM5NTU4NDc5OTU3'
}

const getActionButtons = () => {
	let b = document.querySelector(selectors.actionButtons)
	return b ? b.parentNode.parentNode.parentNode.parentNode : null
};
const getMeetCode = () => {
	return document.querySelector(".CkXZgc").textContent
}
const getParticipantId = () => { return document.querySelector(selectors.participantId) };

initialConfig()

//Wait meeting to start
function initialConfig() {
	setTimeout(() => { getParticipantId() ? createOption() : initialConfig() }, 1000);
}

function createOption() {
	if (!document.body.createShadowRoot) {

		let bottomBar = getActionButtons().parentElement;
		let temp = document.createElement('div')
		temp.id = 'host'
		bt = bottomBar.childNodes[2].prepend(temp);


		elShadow = document.querySelector("#host").attachShadow({ mode: 'closed' });

		let el = document.createElement('div');

		el.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-content: center;
        }
        .container .btn {
          display: flex;
          justify-content: center;
        }
        .text {
          color: #3c4043;
          font-family: 'Google Sans',Roboto,Arial,sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
        }
      </style>
      <div class="container">
        <a class="text" href="${codes[getMeetCode()]}" target="_blank" >Classroom으로 이동하기</a>
      </div>
      `

		elShadow.prepend(el)

	}
}
