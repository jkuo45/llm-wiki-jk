---
title: "The End of Eleventy"
source: "https://brennan.day/the-end-of-eleventy/"
author:
  - "[[Brennan Kenneth Brown]]"
published: 2026-03-03
created: 2026-04-11
description: "Build Awesome is a rebrand of 11ty/Eleventy, backed by a successful $40k Kickstarter. But this attempt to monetize static site generators repeats the same mistakes that killed Gatsby and Stackbit—and misunderstands who actually builds static sites."
tags:
  - "clippings"
---
![A green-tinted photograph of an abandoned industrial warehouse with overgrown vegetation, crumbling brick walls, and a glass skylight roof. Bold white text reads 'The End of Eleventy.' with the byline '[[Brennan Kenneth Brown]]' beneath it.](https://brennan.day/assets/images/blog/11ty.jpg)

Source (edited by the Author)

> UPDATE: The Kickstarter has been [cancelled and rescheduled](https://blog.fontawesome.com/pausing-kickstarter/) for a few months from now due to emails not being sent, ruining the project's "momentum" despite reaching their goal in a single day.

Yesterday, the [[Font Awesome]] team launched a Kickstarter for a new project called [Build Awesome](https://www.kickstarter.com/projects/fontawesome/build-awesome) and [[Build Awesome]] Pro, looking to raise $40,000 USD. And it has already reached that funding goal.

*What is Build Awesome?* Simply put, it's a rebrand of [[Eleventy|11ty/Eleventy]]. Or rather, it is **the end of [[Eleventy]]**.

I have personal stakes in this. [[Eleventy|11ty]] is what my site, and [thousands of others](https://www.awwwards.com/websites/11ty/), are built and powered with. I support [[Eleventy|11ty]] on [Open Collective](https://opencollective.com/11ty) and have [created themes](https://brennan.day/indieweb) for the framework. So how do I feel about this?

But before I get into why I (and many other [[Eleventy|11ty]] devs) are not celebrating this hugely successful Kickstarter, let's first answer the question: *What the hell is 11ty?* Well, it's a static site generator.

*Okay, but what the hell is a static site generator, and why does it matter for the literal future of the Internet so much?* I'm so glad you asked.

## Part One: A Brief History of the Non-Dynamic

Static websites [predate dynamic content management systems](https://headlesshostman.com/a-complete-history-of-static-the-beginning-to-wordpress-headless/) with their fancy backends and databases. In the early days of the Internet, all websites were mere collections of static HTML files.

Dynamic sites started with the advent of the [Common Gateway Interface (CGI)](https://www.geeksforgeeks.org/historical-context-and-evolution-of-cgi/) and later server-side scripting languages like PHP, ASP, and Ruby on Rails, along with database-driven CMS frameworks such as WordPress, which [powers roughly 43% of the entire Internet](https://wordpress.com/blog/2025/04/17/wordpress-market-share/).

Thankfully, the pendulum began to swing back towards static approaches with the rise of modern static-site generators. More secure, simpler hosting, and so much faster. Essentially, [all you need to do is build a folder with some template languages and Markdown files](https://developer.mozilla.org/en-US/docs/Glossary/SSG) and you end up with a fully-rendered website. Here's the timeline:

- **[[Jekyll]] (2008)** was created by GitHub co-founder Tom Preston-Werner, dubbed "blogging for hackers" and repopularized SSGs, particularly with its integration into GitHub Pages, meaning any dev on GH could make a website instantly at `username.github.io` with the framework.
- **[[Hugo]] (2013)**, five years later and written in Go, gained traction for its much faster build speed, making it suitable for large-scale static sites unlike the Ruby-on-Rails dependent [[Jekyll]].
- **[[Gatsby]] (2015)** was a React-based SSG introducing the "content mesh" and leveraged GraphQL for data sourcing, aiming to be a modern, performant web development experience.
- **[[Eleventy]] (2017)**, finally, positioned as an "anti-framework" SSG, offering a lightweight, flexible alternative to more opinionated tools.

## Part Two: 11ty: Origins

[[Eleventy]] was created by [[Zach Leatherman]], drawing [direct inspiration from Jekyll](https://24ways.org/2018/turn-jekyll-up-to-eleventy/). But he wanted an alternative that leveraged the burgeoning Node.js ecosystem without imposing a rigid client-side JavaScript framework.

[[Eleventy|11ty]] does three things well: flexibility, leveraging JavaScript, and avoiding being a JavaScript framework. It supports multiple templating engines, allowing webdevs to migrate easily, and mix and match. Liquid, Nunjucks, Markdown, Handlebars, and EJS all within a single project. While [[Eleventy]] can use the vast npm ecosystem for the build process, it deliberately avoids dictating client-side JavaScript.

Who uses [[Eleventy|11ty]]? NASA, CERN, the TC39 committee, W3C, Google, Microsoft, Mozilla, Apache, freeCodeCamp, to name a few. The [A11y Project](https://www.a11yproject.com/) launched with [[Eleventy]] 1.0 and its [lead developer Eric Bailey](https://social.ericwbailey.website/@eric/109914908787346813) noted that nearly three years later, the site could *still install and run from a cold start with no complications*.

[[Zach Leatherman|Leatherman]] was initially hired by [[Netlify]] to work on [[Eleventy]] full-time, but in September 2024, [[Eleventy|11ty]] moved to [[Font Awesome]], with [[Zach Leatherman|Leatherman]] joining their team. Now, in 2026, [[Eleventy]] is "[[Build Awesome]]", angled as the all-in-one site builder for [[Font Awesome]] and Web Awesome. But why?

I'm writing this because [[Build Awesome]] is trying to answer a question that I've seen first-hand plague this space of web development for years:

## Part Three:...How the fuck do we make money off of this?

By 2015, a term was being codified: the **[[JAMstack]]** (JavaScript, APIs, and Markup). The concept, popularized heavily by [[Netlify]] CEO Matt Biilmann, argued that decoupling the frontend from the backend, pre-rendering static HTML at build time and connecting to services via APIs, was the correct architecture for the modern web. It was fast, secure, and scalable by default.

The [[JAMstack]] framing opened a commercial opportunity. If static sites were the future, who would build the tools, the hosting, and the workflows to support them at scale? [[Gatsby]] became the darling of the VC-funded startup world. It promised a GraphQL data layer that could pull from any CMS or API at build time. By 2019, [[Gatsby]] had [raised $15 million in Series A funding](https://techcrunch.com/2019/09/26/gatsby-raises-15m-series-a-for-its-modern-web-development-platform/); by 2020, [a $28 million Series B followed](https://www.gatsbyjs.com/blog/2020-05-27-announcing-series-b-funding/).

Next.js, from [[Vercel]], emerged as a full-stack React framework that blurred the line between static and server-rendered, competing directly with [[Gatsby]]. The company [reached a valuation of $9.3 billion](https://www.gic.com.sg/newsroom/all/vercel-closes-series-f-at-9-3b-valuation-to-scale-the-ai-cloud/) in part due to this framework (but mostly AI). The market was crowded with well-funded, well-marketed options.

[[Gatsby]] Inc. raised over [a total $46 million in venture capital](https://www.forbes.com/sites/davidjeans/2020/05/27/gatsby-website-building-startup-backed-by-index-ventures-raises-28-million/), attempting to monetize through the ["Gatsby Cloud"](https://www.gatsbyjs.com/docs/reference/cloud/what-is-gatsby-cloud/) platform, offering specialized hosting and content management features. Despite huge investment, Gatsby Cloud failed to get the Silicon Valley "hockey-stick" growth and was ultimately [acquired by Netlify in February 2023](https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/). Following the acquisition, [[Netlify]] announced the shutdown of Gatsby Cloud, and as of writing, [[Gatsby]] itself is dead and no longer maintained.

There was also [[Stackbit]], which aimed to be a "site builder" for various SSGs, promising to simplify the development workflow. However, the complexity of supporting a multitude of SSG and headless CMS combinations was actually impossible. [[Stackbit]] subsequently pivoted its focus to providing a "Visual Editing" layer for headless CMS, allowing content editors to see changes in real-time without direct code interaction. Perhaps unsurprisingly, they too were [acquired by Netlify](https://www.netlify.com/blog/netlify-acquires-stackbit-to-bring-no-code-creation-to-its-platform/) and then turned into [Netlify Create](https://www.netlify.com/blog/netlify-acquires-stackbit-to-bring-no-code-creation-to-its-platform/) before quietly being sunset altogether.

And speak of the Devil! Companies like [[Netlify]] and [[Vercel]] have built businesses around hosting and deployment services for [[JAMstack]] applications. Their strategy is to support popular open-source SSGs (e.g., [[Netlify]]'s support for [[Eleventy]] and [[Vercel]]'s backing of Next.js) as ["loss leaders" to attract users to their paid hosting](https://research.contrary.com/company/netlify) and infrastructure platforms.

You see the problem, right? This model monetizes the infrastructure rather than the SSG itself, and the open-source projects remain dependent on the goodwill and strategic alignment of these larger platforms.

## Part Four: Leatherman's Open Source Dread

[[Zach Leatherman|Leatherman]], as the creator and [~~BDFL~~](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) lead maintainer of [[Eleventy]], has been a vocal advocate for sustainable open-source development. He recently released an eye-opening podcast episode titled ["How Eleventy Survived: Funding, Growth, and Open Source Reality"](https://www.podcastawesome.com/2092855/episodes/18615318-how-eleventy-survived-funding-growth-and-open-source-reality). [[Zach Leatherman|Leatherman]] spoke of the inherent struggle of maintaining a project that becomes too-widely adopted and critical infrastructure, with limited resources and significant personal sacrifice.

Maintainers face burnout and boundaries need to be put in place for any of this to actually be sustainable; the VC mindset of hockey-stick growth was antithetical to the open source ecosystem. [[Zach Leatherman|Leatherman]] joined [[Font Awesome]] because he believed the company shared his commitment to "boring" (reliable and stable) technology and sustainable development, and it's clear that he recorded this podcast while actively planning the hopeful money-maker, [[Build Awesome]].

## Part Five: We've Seen This Movie Before

With that, we've ended up exactly here. With [[Font Awesome]] deciding to attempt to monetize the static-site generator by rebranding it as an accessible alternative to clunky full-stack CMSes. Just take a look at the pro features:

- Collaborative visual editing *(another way to say "headless CMS")*
- Build-in-a-browser *(no local dev setup, no terminal needed)*
- Premium built-in templates and hosted import tools

Sound familiar? This is exactly what [[Stackbit]] was attempting to do before getting acquired and sunset. This is what NetlifyCMS was trying to do before becoming DecapCMS and barely having any support or popularity.

The truth is, there has been no successful CMS for static-site generators because **the only people that give a fuck about creating static sites would much prefer to use a (free and local) IDE and a terminal.**

This is the existential problem and [[Build Awesome]] does not solve it.

You are creating and providing tools (which I personally think would be amazing) to people who do not understand nor care for them. And in doing so, you are neglecting your base audience who is actually already using what already exists.

## Part Six: The Alternative Reality That Cannot Exist

Imagine if [[Build Awesome]] actually reached out to people who regularly make static sites. You know, the userbases on [NeoCities](https://neocities.org/) or [MelonLand](https://melonland.net/) or [32-bit Cafe](https://32bit.cafe/)?

I'm unsure if the companies creating these products are totally ignorant and unaware of the [[IndieWeb]] or haven't developed a relationship with the movement on purpose.

I have a feeling the majority of the userbase would not be in support of something like this. [[Build Awesome]] looks and feels corporate, pro-capitalist, and commodifies one of the few remaining artistic hobbies that hasn't been overrun with consumerism and gear-acquisition syndrome.

## Part Seven: The Berry

In truth, I myself have started a business that has a near identical concept to [[Build Awesome]]. [Berry House](https://berryhouse.ca/) is my independent web studio aiming to create static websites for fledgling nonprofits and marginalized folks. I want to help onboard people and businesses into this space that typically only have their digital presence be their Instagram account or Facebook page, so that they can actually have autonomy, flexibility, and total freedom of design.

The difference is though that my model is pay-what-you-can, or pro bono. I developed [Calgary Groups](https://calgarygroups.ca/) for a client and charged $5/hour for my dev work. I know the people with money are the ones happy to use Squarespace or WordPress indefinitely. The people with money are the ones far more apathetic to the fact they're on the corporate web.

## Part Eight: Conclusion

My point of writing this is that any attempt to monetize the open-source free space of static site generators has failed in the past, and is inherently paradoxical and antithetical.

My point of writing this is that the companies looking to monetize are far too focused on creating high-quality tools instead of focusing on doing the work and research into the *"why"*. Into communicating the philosophy of SSGs in a way that would make them sincerely enticing long-term to non-technical people.

## Appendix: What Other Developers Have to Say

I decided to take to Mastodon to ask my fellow [[Eleventy]] devs how they feel about the the Kickstarter and rebrand. Here's what they had to say:

> "I only care about and use [[Eleventy|11ty]]. Don't know anything about the awesome stuff but doesn't feel like I'm their target audience. I worry [[Eleventy|11ty]] will get sucked up and cease to exist in a form I want to use."
> 
> — [Michael Harley](https://social.lol/@michaelharley@infosec.exchange/116170179829654650)

> "I use Zola, not [[Eleventy|11ty]]. However, this seems really weird. A company with plenty of resources is running a Kickstarter for a rebrand? Or am I missing something?"
> 
> — [Ben Overmyer](https://social.lol/@skysong@floss.social/116170719407433148)

> "Terrible, nothing good survives in this world."
> 
> — [Grigør](https://social.lol/@grgml@indieweb.social/116170171739226707)

> "Mixed feelings I suppose. Initially excitement and that's still there, but I've since seen folks voice concerns that I've now been dwelling on. I've backed [[Font Awesome]], Web Awesome (didn't end up using it, got a nice deck of playing cards though) and now I gladly back [[Build Awesome]]. What this really means for [[Eleventy|11ty]] I can't say, but should it go in a direction I don't like, then at least I can use the latest available version we have now, until the end."
> 
> — [Christian Alder](https://social.lol/@hejchristian@mastodon.social/116169574225292789)

> "I feel like there could be clearer communication besides just launching a Kickstarter that seems to be for people who don't already use [[Eleventy|11ty]]. I just don't see how this helps anyone besides just adding another subscription fee income source."
> 
> — [🌸 melanie kat 👻](https://social.lol/@zicklepop@nyan.lol/116169502240852851)

> "Wait and see but sceptical. Yeah the name is not the best one — [[Eleventy|11ty]] was short, easy to remember, has a history about the initial project."
> 
> — [Nicolas (greenman)](https://social.lol/@greenman@fosstodon.org/116169192674835694)

> "Part of the reason I liked [[Eleventy|11ty]] was the broad community using it and the homegrown feel. The change feels like the community will become centralized and gatekeep-y? I guess time will tell, but there's some grief."
> 
> — [nannnsss🌱🏴](https://social.lol/@nannnsss/116169188739257749)

> "Mixed feelings. I don't like change. It's a lame name. I know folks gotta eat, but pro tiers make me queasy. (I really like that diner-style mug, though!)"
> 
> — [Cobb](https://social.lol/@cobb@dice.camp/116168693678505999)

![A cartoon illustration of a cute opossum wearing oversized black-rimmed glasses and a light blue collar, floating in the air while holding a red balloon by a blue string. The opossum has wide expressive eyes, a pink nose, small pink paws, and a long pink tail curling to one side. The art style is bold and graphic with thick outlines, rendered in shades of grey, white, and black against a white background.](https://brennan.day/assets/images/blog/elle.png)

Elle the [[Eleventy]] Possum, illustrated by David Neal

## Epilogue: The Mascot

Before I finish this already-very-long post, I wanted to take a second to write about [[Eleventy]]'s possum mascot, whose current iteration is aptly named Elle.

This mascot is [the brainchild of the late web developer [[James Williamson]]](https://web.archive.org/web/20200307013845/https://twitter.com/jameswillweb/status/999052022497316865), who ran the website [simpleprimate.com](https://web.archive.org/web/20240416102830/https://simpleprimate.com/) which sadly has lapsed in domain ownership.

I was introduced to James many years ago when I was learning about web development on [Lynda.com](http://lynda.com/) (now LinkedIn Learning). He was an incredibly talented and warm instructor, and one of my favourites on the site. He taught me so much of what I know about web accessibility, design, CSS, and static site generators. He [passed away](https://www.11ty.dev/blog/james-williamson/) from [ALS in 2019](https://gomakethings.com/james-williamson-and-a-web-for-everyone/).

I wanted to share this because I think it's important to remember who came before, and who give themselves selflessly. [[James Williamson|James]] understood this kind of selfless labour intimately. He gave generously to the web community until he couldn't anymore. The tools and lessons he left behind outlasted him in ways no Kickstarter can manufacture.

The courses [[James Williamson|James]] taught are no longer available on LinkedIn Learning, and I'm not sure they can be accessed anywhere now, but I will never forget what he taught me.

---

## Webmentions

### 20 Likes

### 10 Reposts

### 8 Replies

@brennan https://mastrojs.github.io is still independent! And regarding DecapCMS, there is also the Sveltia rewrite. But yeah, definitely no money in that business. Mastro: the simplest web framework and site generator

@Tipa I use [[IndieAuth]] for my comment system, they support email, GitLab, Codeberg, and PGP keys. I'm sorry they don't have ActivityPub/Fediverse functionality.

@Tipa how exciting! I have a full-write up of how I did mine here, but it is rather technical https://brennan.day/building-an-indieauth-comment-system-for-your-static-site/ Building an IndieAuth Comment System for Your Static Site

@brennan I'll add my GitHub link then. And my itch.io, too -- just in case???? As someone who is about to convert their website to static, following in the footsteps of @Aywren, I'm super interested in bolt-on comment systems too.

@brennan not reading the article yet but WHAT? Was just about to launch a static web site...

@brennan having read the article, I guess my website needs my Github link to comment, since it doesn't support (checks where I am) Mastodon links???? I didn't know [[Font Awesome]] was in the mix. They were great back in the day, less so now. Well, [[Hugo]] was also an option...

@brennan I’m so glad I built my own static site generator????

**Linking Summary:**
- New links added: [[Brennan Kenneth Brown]], [[Font Awesome]], [[Build Awesome]], [[Eleventy]], [[Jekyll]], [[Hugo]], [[Gatsby]], [[Zach Leatherman]], [[Netlify]], [[JAMstack]], [[Vercel]], [[Stackbit]], [[IndieWeb]], [[James Williamson]]
- Suggested new entity notes to create: [[Static Site Generator]], [[Web Awesome]], [[IndieAuth]], [[NeoCities]], [[32-bit Cafe]]
- Strong connections to strengthen: [[Eleventy]] ↔ [[Build Awesome]], [[Zach Leatherman]] ↔ [[Eleventy]], [[Netlify]] ↔ [[JAMstack]]
