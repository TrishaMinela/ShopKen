fetch("https://trishaminela.github.io/Lesson-12/json/directory.json")
    .then(function (response) {
        return response.json();
    })

    .then(function(data){
        const businesses = data['businesses'];
        const page = businesses.filter(specific => specific.BusinessName == "TJZED Cafe" || "Lucidel Resort" || "Morales Resort" || "Iskargu Restaurant" || "Isdaan Floating Restaurant" || "Sweet Tooth" || "The Wing Alley" || "ZeusPaulo Burger House")

        page.forEach(businesses => {
            let BusinessSpace = document.createElement('section');
            BusinessSpace.className = "BusinessSpace"
            let h2 = document.createElement('h2');
            h2.className = "h2";
            let p1 = document.createElement('p');
            p1.className = "p1";
            let p2 = document.createElement('p');
            p2.className = "p2";
            let logo = document.createElement('img');
            logo.className = "logos";
            let feature = document.createElement('img');;
            feature.className = "feature";

            h2.textContent = `${businesses.BusinessName}`;
            BusinessSpace.appendChild(h2)

            p1.textContent = `${businesses.ContactNumber}`;
            BusinessSpace.appendChild(p1)

            logo.setAttribute('src', businesses.Logo);
            
            logo.setAttribute('alt', `The logo of: ${businesses.BusinessName}`);
            BusinessSpace.appendChild(logo);
            BusinessSpace.appendChild(p2)

            feature.setAttribute('src', businesses.FeatureImage);
            feature.setAttribute('alt', `The image of: ${businesses.BusinessName}`);
            BusinessSpace.appendChild(feature);

            document.getElementById('businesses').appendChild(BusinessSpace)
        })
    })
