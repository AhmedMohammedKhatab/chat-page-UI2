const chats = [
	{
		name: "Mom's Discharge Plan",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Karen Becker",
		date: "Sep 12"
	},
	{
		name: "Mom's Diet",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Karen Becker",
		missed: "2",
		date: "Sep 12"
	},
	{
		name: "Easter Weekend",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Love One",
		date: "Sep 12"
	},
	{
		name: "David Williams",
		img: "assetts/icons/avatar1.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "John Doe",
		img: "assetts/icons/avatar2.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{

		name: "Jane Doe",
		img: "assetts/icons/avatar3.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
		{
		name: "David Williams",
		img: "assetts/icons/avatar1.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "John Doe",
		img: "assetts/icons/avatar2.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "Jane Doe",
		img: "assetts/icons/avatar3.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "Mom's Discharge Plan",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Karen Becker",
		date: "Sep 12"
	},
	{
		name: "Mom's Diet",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Karen Becker",
		missed: "2",
		date: "Sep 12"
	},
	{
		name: "Easter Weekend",
		img: "https://www.tech-wd.com/wd/wp-content/uploads/2019/06/Avatars.png",
		last: "Lorem ipsum dolor sit amet",
		sender: "Love One",
		date: "Sep 12"
	},
	{
		name: "David Williams",
		img: "assetts/icons/avatar1.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "John Doe",
		img: "assetts/icons/avatar2.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{

		name: "Jane Doe",
		img: "assetts/icons/avatar3.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
		{
		name: "David Williams",
		img: "assetts/icons/avatar1.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "John Doe",
		img: "assetts/icons/avatar2.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	},
	{
		name: "Jane Doe",
		img: "assetts/icons/avatar3.png",
		last: "Lorem ipsum dolor sit amet",
		date: "Sep 12"
	}
]

const conversationBox = document.getElementById('chat-heads')
let chat = ''
for (let i = 0; i < chats.length; i++) {
	if (chats[i].missed && chats[i].sender) {
		chat += `<div class="block active-block">
					<div><img class="avatar" src="${chats[i].img}"></div>
					<div class="info">
						<p class="name">${chats[i].name}</p>
						<p class="sender">${chats[i].sender}</p>
						<p class="last">${chats[i].last}</p>
					</div>
					<div class="meta">
						<p class="date">${chats[i].date}</p>
						<div class="missed">${chats[i].missed}</div>
					</div>
				</div>`
	}else if (chats[i].missed) {
		chat += `<div class="block">
					<div><img class="avatar" src="${chats[i].img}"></div>
					<div class="info">
						<p class="name">${chats[i].name}</p>
						<p class="last">${chats[i].last}</p>
					</div>
					<div class="meta">
						<p class="date">${chats[i].date}</p>
						<div class="missed">${chats[i].missed}</div>
					</div>
				</div>`
	}else if (chats[i].sender) {
		chat += `<div class="block">
					<img class="avatar" src="${chats[i].img}">
					<div class="info">
						<p class="name">${chats[i].name}</p>
						<p class="sender">${chats[i].sender}</p>
						<p class="last">${chats[i].last}</p>
					</div>
					<div class="meta">
						<p class="date">${chats[i].date}</p>
					</div>
				</div>`
	}else {
		chat += `<div class="block">
					<img class="avatar" src="${chats[i].img}">
					<div class="info">
						<p class="name">${chats[i].name}</p>
						<p class="last">${chats[i].last}</p>
					</div>
					<div class="meta">
						<p class="date">${chats[i].date}</p>
					</div>
				</div>`
	}
}
conversationBox.innerHTML = chat