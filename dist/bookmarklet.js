javascript:(function()%7B%22use%20strict%22%3Bvar%20existingContainer%3Ddocument.querySelector(%22.title__bookmarklet%22)%3BexistingContainer%26%26existingContainer.remove()%3Bvar%20titleContainer%3Ddocument.createElement(%22div%22)%3BtitleContainer.className%3D%22title__bookmarklet%22%2CtitleContainer.style.textAlign%3D%22center%22%2CtitleContainer.style.fontSize%3D%2216px%22%2CtitleContainer.style.fontFamily%3D%22Arial%22%2CtitleContainer.style.padding%3D%2220px%22%2CtitleContainer.style.backgroundColor%3D%22lightyellow%22%2CtitleContainer.style.position%3D%22absolute%22%2CtitleContainer.style.left%3D0%2CtitleContainer.style.top%3D0%2CtitleContainer.style.width%3D%22100vw%22%2CtitleContainer.style.zIndex%3D%2299999%22%2CtitleContainer.textContent%3Ddocument.title%2Cdocument.body.appendChild(titleContainer)%3B%7D)()