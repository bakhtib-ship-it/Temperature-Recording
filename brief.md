# Project brief



## Shape
Family: **Dashboard** — A list of temperatures.

Why this shape fits: The app would retrieve the average temperature of the metropolitan area.

## Friction — the problem this app actually solves
The app will solve the issue of quickly getting access to the temperature of different metropolitan areas. The tracker also includes a bar graph that shows the temperatures in celcius degrees.

## Win — who uses it and what's concretely different
The app can be used by any user. It should be able to correctly connect to the internet and collect the temperature of the mentioned metropolitan areas and report it back to the user as part of a table.

## Memory — what the app remembers between sessions
The app should be able to remember the following:
- the list of metropolitan areas
- the list of metropolitan areas that the user selected to see the temperature of.

## Scope
**Dream (someday, everything):**
hopefully, soon, the app will be able to keep collecting these temperatures over multiple days and compile a time-series of them in a file that is maintained on the cloud.

**Workshop Build (the MVP):**
- the app should use this list to ask the user to select metropolitan areas (note that there are continent names)
Asia

Tokyo, Japan (~37 million)
Delhi, India (~33 million)
Shanghai, China (~29 million)
Dhaka, Bangladesh (~22 million)
Beijing, China (~22 million)
Mumbai, India (~21 million)
Osaka, Japan (~19 million)
Karachi, Pakistan (~17 million)
Chongqing, China (~17 million)
Istanbul, Turkey (~15 million)

South & Central America

São Paulo, Brazil (~22 million)
Mexico City, Mexico (~22 million)
Buenos Aires, Argentina (~15 million)
Rio de Janeiro, Brazil (~13 million)
Lima, Peru (~11 million)
Bogotá, Colombia (~11 million)

Africa

Cairo, Egypt (~21 million)
Lagos, Nigeria (~15 million)
Kinshasa, DR Congo (~15 million)
Johannesburg, South Africa (~10 million)

North America

New York City, USA (~19 million)
Los Angeles, USA (~13 million)
Chicago, USA (~9 million)
Dallas–Fort Worth, USA (~8 million)
Toronto, Canada (~7 million)
Houston, USA (~7 million)
Washington D.C., USA (~6 million)
Miami, USA (~6 million)
Atlanta, USA (~6 million)
Philadelphia, USA (~6 million)
Vancouver, Canada (~3 million)
Montreal, Canada (~4 million)

Europe

Moscow, Russia (~17 million)
London, UK (~14 million)
Paris, France (~11 million)
Madrid, Spain (~7 million)
Barcelona, Spain (~5 million)
Berlin, Germany (~4 million)
Rome, Italy (~4 million)

Middle East & Oceania

Tehran, Iran (~17 million)
Riyadh, Saudi Arabia (~7 million)
Sydney, Australia (~5 million)
Melbourne, Australia (~5 million)

- receive user's selection (metropolitan areas that the user wants to see the temperature of)
- connect to the internet and retrieve the temperature of that metropolitan area
- create a table that shows each selected metropolitan area along with its temperature
- create a bar graph that shows on the x-axis the names of the metropolitan areas and the height is their temperature in celcius degrees

**Next Expansion (the single most logical add-on):**
Maintaining an Excel file contiaining a time-series. This should not be created in the first version.

## Hand-off — my context + questions for you, the agent
Determine where on the internet you would be able to find temeprature information of the selected metropolitan areas.
---

**Instructions for you, the agent.** Read this brief end to end before doing anything else. Then, before you plan anything, interview me one question at a time — in plain English, about what the app does and how it feels, not the tech — until you're about 95% sure what I want the first version to be; let me answer "I don't know, you decide" on any question, and play back what you heard before planning. Once I confirm, produce your plan in writing — the assumptions you're making, the simplest version you can ship, the part that's going to be hardest, and the stack you recommend. Do not edit any files until I approve that plan.
