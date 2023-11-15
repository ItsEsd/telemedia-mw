 'use strict';

  fetch('content.json')
    .then(response => response.json())
    .then(data => {
      data.sort(() => Math.random() - 0.5);
      const randomItems = data.slice(0, 5);
      const galleryContainer = document.getElementById('galleryContainer');
      randomItems.forEach((item) => {
        const flexItem = document.createElement('div');
        flexItem.classList.add('flex-item');
        flexItem.innerHTML = `
          <div onclick="openModal('${item.image}', '${item.caption}', '${item.date}', '${item.details}')">
            <div class="flex-imgcon"><img src="${item.image}" alt="${item.caption}" class="img-fluid"></div>
            <div class="caption">${item.caption}<br><a href="#" class="link">Know More ⏵</a></div>
          </div>
        `;
      
        galleryContainer.appendChild(flexItem);
      });
    });

  function openModal(imageSrc, caption, date, details) {
    var modalImage = document.querySelector('#qrconlightbx img');
    var modalCaption = document.querySelector('#qrconlightbx .qrcon-caption');
    var modalDate = document.querySelector('#qrconlightbx .qrcon-date');
    var modalDetails = document.querySelector('#qrconlightbx .qrcon-details');

    modalImage.src = imageSrc;
    modalCaption.textContent = `${caption}`;
    modalDate.textContent = `Date: ${date}`;
    modalDetails.textContent = `${details}`;

    var lightbox = new bootstrap.Modal(document.getElementById('qrconlightbx'));lightbox.show();
    
  }

  var control = document.querySelector('#btncon');
  control.addEventListener('click', function(e) {
    var div = document.getElementById('galleryContainer');
    var target = e.target;
    switch (target.id) {
      case 'rgtscrl':
        div.scrollLeft += 265;
        break;
      case 'lftscrl':
        div.scrollLeft -= 295;
        break;
    }
  });
  // if ( window.location !== window.parent.location ) {
  //   if (document.referrer.includes('index.html')) {
  //     document.getElementById('ftnote').style.display="none";
  //   }
  // }

 