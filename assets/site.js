
const EMAIL='info@mecquad.tech',PHONE='+94 77 866 2627',TEL='+94778662627',WA='94778662627';
const FORM_EMAIL='mecquad@gmail.com'; // demo requests are delivered here (already activated on FormSubmit)
const FORM_URL='https://formsubmit.co/ajax/'+FORM_EMAIL;
const STATIC=!!window.MQ_STATIC; // true on the published website (real page addresses), false in the single-file preview
const SLUG={"pos": "pos-system", "billing": "automated-billing-system", "meta-ai": "facebook-instagram-ai-automation", "marketing-analyzer": "digital-marketing-analyzer", "whatsapp-ai": "whatsapp-ai-chatbot", "workflow-automation": "business-workflow-automation", "ai-receptionist": "ai-receptionist-booking-agent", "lead-followup": "ai-lead-follow-up", "document-ai": "ai-document-processing", "content-studio": "ai-content-studio", "social-planner": "social-media-planner-scheduler", "seo-tracker": "seo-audit-rank-tracker", "ads-optimizer": "ads-campaign-optimizer", "email-sms": "email-sms-marketing-automation", "review-manager": "review-reputation-manager", "data-analytics": "data-analytics-dashboards", "data-science": "data-science-solutions", "ml-models": "predictive-ml-models", "ai-models": "custom-ai-assistants", "mobile-apps": "mobile-app-development"};
const ROUTES={home:'/',services:'/services',solutions:'/solutions',about:'/about',contact:'/contact',privacy:'/privacy'};
const L=r=>STATIC?(ROUTES[r]||('/solutions/'+SLUG[r])):'#'+r;
const IMG=STATIC?'/images/':'images/';
const ALT={pos:'Cashier using a touchscreen POS terminal while a customer pays by phone at a cafe counter',billing:'Business owner reviewing invoices on a laptop at a desk',"meta-ai":'Shop owner holding a phone showing a busy social media inbox in a clothing boutique',"whatsapp-ai":'Customer chatting with a business on WhatsApp in a cafe',"workflow-automation":'Professional relaxing beside monitors showing automated workflow diagrams',"ai-receptionist":'Clinic reception with a tablet showing an appointment calendar',"lead-followup":'Sales professional with a headset smiling at a lead list on a laptop',"document-ai":'Phone scanning a stack of invoices into a spreadsheet on a laptop',"ai-models":'Professional chatting with an AI assistant on a laptop',"marketing-analyzer":'Marketing team discussing performance charts on a large screen',"content-studio":'Content creator desk with a camera, ring light and social media designs',"social-planner":'Laptop showing a colourful monthly social media content calendar',"seo-tracker":'Laptop showing search results and an upward ranking graph',"ads-optimizer":'Digital marketer adjusting an advertising dashboard',"email-sms":'Phone showing a promotional discount email next to a shopping bag',"review-manager":'Restaurant owner smiling at five-star reviews on a tablet',"data-analytics":'Manager presenting a live sales dashboard in a meeting room',"data-science":'Data scientist working with charts and code on two monitors',"ml-models":'Laptop showing a neural network graph in a server room',"mobile-apps":'Two phones showing food delivery and booking apps'};

/* ---------- UI previews ---------- */
const bar=t=>`<div class="mbar"><i></i><i></i><i></i><b>${t}</b></div>`;
const M={
pos:()=>`<div class="mock">${bar('MecQuad POS · Counter 1')}<div class="pos">
<div class="box"><div class="tiles">
<div class="tile sel">Chicken Kottu<span>Rs 1,450</span></div><div class="tile">Iced Coffee<span>Rs 650</span></div><div class="tile">Fried Rice<span>Rs 1,200</span></div>
<div class="tile">Milk Tea<span>Rs 300</span></div><div class="tile sel">Egg Roti<span>Rs 250</span></div><div class="tile">Lime Juice<span>Rs 400</span></div></div></div>
<div class="box cart"><div class="ln"><span>Chicken Kottu ×2</span><span>2,900</span></div><div class="ln"><span>Egg Roti ×3</span><span>750</span></div><div class="ln muted"><span>Service 10%</span><span>365</span></div><div class="ln tot"><span>Total</span><span>Rs 4,015</span></div><div class="pay">Charge · Card / Cash / QR</div></div>
</div></div>`,
invoice:()=>`<div class="mock">${bar('Billing · September 2026')}<div class="box"><table class="inv"><thead><tr><th>INVOICE</th><th>CUSTOMER</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>
<tr><td>INV-1042</td><td>Lanka Traders</td><td>Rs 84,500</td><td><span class="pill g">Paid</span></td></tr>
<tr><td>INV-1043</td><td>Hill Cafe</td><td>Rs 12,300</td><td><span class="pill o">Auto-sent</span></td></tr>
<tr><td>INV-1044</td><td>BlueWave Ltd</td><td>$ 1,200</td><td><span class="pill w">Reminder 2</span></td></tr>
<tr><td>INV-1045</td><td>Sunrise Clinic</td><td>Rs 46,000</td><td><span class="pill g">Paid</span></td></tr>
</tbody></table></div></div>`,
chat:(t,msgs,wa)=>`<div class="mock">${bar(t||'Inbox · Facebook + Instagram')}<div class="box chat">${(msgs||[
['Hi, is the blue dress available in size M? 😊','Instagram DM · 9:41 PM'],
['Yes! Size M is in stock at Rs 4,950. Want me to reserve one for you?','AI reply · 3 sec',1],
['Yes please, deliver to Kandy',''],
['Done ✅ Order #2291 created. Cash on delivery, arrives in 2 days.','AI reply · lead saved',1]]).map(m=>`<div class="bub${m[2]?' me'+(wa?' wa':''):''}">${m[0]}${m[1]?`<small>${m[1]}</small>`:''}</div>`).join('')}</div></div>`,
flow:(t,nodes)=>`<div class="mock">${bar(t)}<div class="box"><div class="flow">${nodes.map((n,i)=>(i?'<span class="arrow">→</span>':'')+`<div class="node${n[2]?' hot':''}">${n[0]}<span>${n[1]}</span></div>`).join('')}</div>
<div class="ln" style="margin-top:12px"><span class="muted">Runs this month</span><span>1,284</span></div><div class="ln"><span class="muted">Hours saved</span><span>96 h</span></div></div></div>`,
cal:()=>{const p={1:['Reel','b'],2:['Offer'],4:['Post','b'],5:['Story'],8:['Reel','b'],9:['Post'],11:['Offer'],12:['Story','b']};return `<div class="mock">${bar('Content Planner · October')}<div class="box cal">${['M','T','W','T','F','S','S'].map(d=>`<div class="d">${d}</div>`).join('')}${Array.from({length:14},(_,i)=>`<div class="c"><span class="d" style="text-align:left">${i+5}</span>${p[i]?`<span class="p ${p[i][1]||''}">${p[i][0]}</span>`:''}</div>`).join('')}</div></div>`},
post:()=>`<div class="mock">${bar('AI Content Studio · 3 variations')}<div class="box post"><div class="img">Weekend<br>20% OFF</div><div class="cap2"><em>CAPTION · FRIENDLY TONE</em><span>This weekend only ☀️ Get 20% off every cake in store. Tag someone who deserves a treat!</span><em>HASHTAGS</em><span>#ColomboEats #CakeLovers #WeekendDeals</span><span class="pill o" style="justify-self:start">Scheduled · Sat 7:00 PM</span></div></div></div>`,
table:(t,head,rows)=>`<div class="mock">${bar(t)}<div class="box"><table class="inv"><thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`,
dash:(t)=>`<div class="mock">${bar(t||'Marketing Analyzer · Last 30 days')}<div class="kpis">
<div class="kpi"><span>REACH</span><strong>48.2K</strong><em>▲ 18%</em></div><div class="kpi"><span>CLICKS</span><strong>3,914</strong><em>▲ 9%</em></div><div class="kpi"><span>COST / LEAD</span><strong>$1.84</strong><em>▼ 12%</em></div></div>
<div class="box chart"><svg viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
<g stroke="rgba(255,255,255,.12)" stroke-width="1"><line x1="0" y1="30" x2="400" y2="30"/><line x1="0" y1="60" x2="400" y2="60"/><line x1="0" y1="90" x2="400" y2="90"/></g>
<path d="M0 95 L40 88 L80 90 L120 72 L160 76 L200 60 L240 52 L280 58 L320 38 L360 30 L400 20 L400 120 L0 120Z" fill="rgba(232,99,26,.18)"/>
<path d="M0 95 L40 88 L80 90 L120 72 L160 76 L200 60 L240 52 L280 58 L320 38 L360 30 L400 20" fill="none" stroke="#e8631a" stroke-width="2.5"/>
<circle cx="400" cy="20" r="4" fill="#e8631a"/></svg></div></div>`,
bars:(t,rows)=>`<div class="mock">${bar(t)}<div class="box bars">${rows.map(r=>`<div class="bar"><span>${r[0]}</span><div><i style="width:${r[1]}%"></i></div><span>${r[2]}</span></div>`).join('')}</div></div>`,
code:(t,txt)=>`<div class="mock">${bar(t)}<div class="box code">${txt}</div></div>`,
phones:()=>`<div class="mock" style="min-width:330px"><div class="phones">
<div class="phone"><div class="notch"></div><div class="hdr">FoodGo</div><div class="big">Your order is on the way · 12 min</div><div class="row"><span>Chicken Kottu</span><span>×2</span></div><div class="row"><span>Lime Juice</span><span>×1</span></div><div class="row"><span>Total</span><span>Rs 3,300</span></div></div>
<div class="phone"><div class="notch"></div><div class="hdr">BookIt</div><div class="row"><span>Tue 6 Oct</span><span>10:30</span></div><div class="row"><span>Haircut</span><span>45 min</span></div><div class="big">Confirm booking</div><div class="row"><span>Loyalty points</span><span>240</span></div></div>
</div></div>`
};

/* ---------- Solutions data ---------- */
const S=[
{id:'pos',cat:'Systems & Apps',name:'POS System',short:'Fast point of sale for shops, restaurants and pharmacies, with stock and sales reports built in.',
 lead:'A point of sale system that handles billing, stock and reports in one place. Works for retail shops, restaurants, cafes, pharmacies and supermarkets.',
 mock:()=>M.pos(),
 feats:[['Quick billing','Touch-friendly checkout with barcode scanning, discounts and split payments.'],['Stock control','Live stock levels, low-stock alerts and supplier purchase orders.'],['Cash, card and QR','Accept every payment type and print or SMS the receipt.'],['Sales reports','Daily, weekly and monthly sales, best sellers and staff performance.'],['Multi-branch','Manage several outlets from one dashboard.'],['Works offline','Keeps billing during internet outages and syncs later.']],
 who:['Retail shops and supermarkets','Restaurants, cafes and bakeries','Pharmacies and hardware stores','Businesses with more than one branch']},
{id:'billing',cat:'Systems & Apps',name:'Automated Billing System',short:'Invoices that create, send and follow up on themselves, so you get paid on time.',
 lead:'Stop chasing payments by hand. The system creates invoices, sends them by email or WhatsApp, and sends polite reminders until they are paid.',
 mock:()=>M.invoice(),
 feats:[['Recurring invoices','Monthly or yearly billing runs automatically for subscriptions and contracts.'],['Auto reminders','Scheduled reminders before and after the due date.'],['Online payments','Customers pay by card or bank transfer from the invoice link.'],['Multi-currency','Bill local clients in LKR and overseas clients in USD, GBP or EUR.'],['Tax ready','VAT and tax fields with clean, branded PDF invoices.'],['Cash-flow view','See what is paid, due and overdue at a glance.']],
 who:['Service companies and agencies','Subscription and rental businesses','Schools, clinics and gyms','Freelancers billing overseas clients']},
{id:'meta-ai',cat:'AI Automation',name:'Meta Business Suite AI Automation',short:'An AI assistant that answers Facebook and Instagram messages and comments 24/7 and captures leads.',
 lead:'Your Facebook and Instagram inbox, answered in seconds, day and night. The AI replies to messages and comments using your prices and product details, takes orders and saves every lead.',
 mock:()=>M.chat(),
 feats:[['Instant replies','Answers DMs and comments in seconds, in English, Sinhala or Tamil.'],['Knows your business','Trained on your products, prices, delivery areas and FAQs.'],['Order capture','Collects name, address and order details, then creates the order.'],['Lead tracking','Every enquiry is saved to a sheet or CRM for follow-up.'],['Human handover','Hands the chat to your team when a person is needed.'],['Post scheduling','Plan and schedule posts across Facebook and Instagram.']],
 who:['Online stores selling on social media','Restaurants and delivery services','Salons, clinics and service providers','Any business getting too many DMs to answer']},
{id:'marketing-analyzer',cat:'Marketing',name:'Digital Marketing Analyzer',short:'One dashboard for your ads, social media and website performance, with clear next steps.',
 lead:'See how your marketing is really performing. The Analyzer pulls your ads, social media and website data into one dashboard and tells you what to fix.',
 mock:()=>M.dash(),
 feats:[['All channels, one view','Facebook, Instagram, Google Ads and website traffic together.'],['Cost per lead','Know exactly what each customer costs you, by campaign.'],['Competitor tracking','Compare your social growth and posting against competitors.'],['SEO audit','Find website issues that stop you ranking on Google.'],['Best time to post','Learn when your audience is most active.'],['Monthly reports','Branded PDF reports ready to share with your team.']],
 who:['Business owners running their own ads','Marketing teams and agencies','E-commerce brands','Companies planning a marketing budget']},
{id:'whatsapp-ai',cat:'AI Automation',name:'WhatsApp AI Chatbot',short:'Answer customers, take orders and send updates on WhatsApp automatically, 24/7.',
 lead:'Most of your customers already use WhatsApp. This AI chatbot answers their questions, takes orders and bookings, and sends order updates on the official WhatsApp Business API.',
 mock:()=>M.chat('WhatsApp Business · AI agent',[['Hi, what time do you close today?','Customer · 8:47 PM'],['Hi! We are open until 10 PM today. Would you like to place an order for pickup? 🍰','AI reply · 2 sec',1],['Yes, 1 chocolate cake 1kg',''],['Great choice! Rs 5,800. Pickup at 9:30 PM? I will send a payment link now.','AI reply · order started',1]],1),
 feats:[['Official WhatsApp API','Verified business number with a green-tick path.'],['Orders and bookings','Takes orders, reservations and appointments in chat.'],['Payment links','Sends secure payment links inside the conversation.'],['Broadcasts','Send offers and updates to customers who opted in.'],['Order updates','Automatic confirmation, dispatch and delivery messages.'],['Team inbox','Your staff can join any chat from one shared inbox.']],
 who:['Restaurants, bakeries and cafes','Online shops and delivery services','Clinics, salons and service centres','Any business that sells over WhatsApp']},
{id:'workflow-automation',cat:'AI Automation',name:'Business Workflow Automation',short:'Connect your apps and let repetitive work run itself: data entry, reports, follow-ups and approvals.',
 lead:'Every business has tasks someone does by hand, every day. We automate them. New orders flow to your sheets, invoices go out, managers get approvals, and reports arrive on time.',
 mock:()=>M.flow('Automation · New website order',[['New order','Website form'],['AI checks','Validates details',1],['Save','Google Sheets'],['Notify','WhatsApp + email']]),
 feats:[['Connects your apps','Gmail, Sheets, WhatsApp, CRM, accounting and more.'],['AI steps','Reads, sorts and summarises emails and documents.'],['Approvals','Route requests to the right manager automatically.'],['Scheduled reports','Daily and weekly reports created and sent for you.'],['Error alerts','You are told the moment something needs attention.'],['Built on n8n or Make','Reliable tools you own, with no lock-in.']],
 who:['Small teams doing lots of admin','Operations and finance teams','Agencies managing many clients','Growing businesses that cannot hire yet']},
{id:'ai-receptionist',cat:'AI Automation',name:'AI Receptionist & Booking Agent',short:'An AI that answers enquiries, books appointments and sends reminders, day and night.',
 lead:'Never miss a booking again. The AI receptionist answers enquiries on your website, WhatsApp and social media, checks your calendar, books the slot and sends reminders so customers show up.',
 mock:()=>M.table('Bookings · Today',['TIME','CUSTOMER','SERVICE','STATUS'],[['09:30','Nimali P.','Dental check-up','<span class="pill g">Confirmed</span>'],['10:15','Ravi K.','Cleaning','<span class="pill o">Booked by AI</span>'],['11:00','Sara M.','Consultation','<span class="pill w">Reminder sent</span>'],['12:30','Ashan D.','Follow-up','<span class="pill o">Booked by AI</span>']]),
 feats:[['24/7 booking','Customers book any time, even when you are closed.'],['Calendar sync','Works with Google Calendar and your booking system.'],['Smart reminders','WhatsApp and SMS reminders cut no-shows.'],['Reschedule and cancel','Customers change bookings without calling.'],['FAQs answered','Prices, location and opening hours answered instantly.'],['Staff schedules','Books the right person for each service.']],
 who:['Clinics and dental practices','Salons, spas and gyms','Consultants and tutors','Car service and repair centres']},
{id:'lead-followup',cat:'AI Automation',name:'AI Lead Follow-up',short:'Every new lead gets a fast, personal reply and follow-up until they are ready to buy.',
 lead:'Leads go cold when nobody replies. This system scores every new lead from your ads, website and social media, replies within minutes, and follows up with personal messages until they buy or say no.',
 mock:()=>M.table('Leads · This week',['LEAD','SOURCE','SCORE','NEXT STEP'],[['Dinesh F.','Facebook ad','<span class="pill g">Hot 92</span>','Call today'],['Amaya R.','Website','<span class="pill o">Warm 71</span>','Follow-up 2 sent'],['Tharaka S.','Instagram','<span class="pill o">Warm 64</span>','Send brochure'],['Kevin L.','Google ad','<span class="pill w">Cold 30</span>','Nurture email']]),
 feats:[['Instant first reply','Every lead answered in minutes, not days.'],['Lead scoring','AI ranks leads so your team calls the hottest first.'],['Follow-up sequences','Personal email, SMS and WhatsApp follow-ups.'],['CRM sync','Leads and history saved to your CRM or sheet.'],['Sales alerts','Your team is notified when a lead is ready.'],['Results tracking','See which ads bring leads that actually buy.']],
 who:['Real estate and property sellers','Education and training institutes','Car sales and finance companies','B2B service providers']},
{id:'document-ai',cat:'AI Automation',name:'AI Document Processing',short:'Read invoices, receipts and forms automatically and send the data where it belongs.',
 lead:'Stop typing data from paper and PDFs. The AI reads invoices, receipts, forms and ID documents, extracts the details and sends them straight into your accounting system or spreadsheet.',
 mock:()=>M.bars('Document AI · Invoice reader',[['Supplier name',98,'98%'],['Invoice number',99,'99%'],['Total amount',97,'97%'],['Due date',95,'95%'],['Line items',91,'91%']]),
 feats:[['Reads any format','PDFs, scans, photos and emails.'],['Accurate extraction','Names, dates, totals and line items pulled out automatically.'],['Human check','Low-confidence fields are flagged for review.'],['Exports anywhere','Excel, Google Sheets, QuickBooks, Xero or your system.'],['Bulk processing','Hundreds of documents in minutes.'],['Searchable archive','Find any document by supplier, date or amount.']],
 who:['Accounting and finance teams','Logistics and import businesses','Insurance and banking','Clinics handling patient forms']},
{id:'content-studio',cat:'Marketing',name:'AI Content Studio',short:'Create on-brand posts, captions, images and ad copy in minutes instead of hours.',
 lead:'Keep your social media active without a full content team. The AI Content Studio writes posts, captions, hashtags and ad copy in your brand voice and creates matching images.',
 mock:()=>M.post(),
 feats:[['Brand voice','Learns your tone, products and style.'],['Posts and captions','Ready-to-post content for Facebook, Instagram and LinkedIn.'],['Image creation','On-brand graphics and product visuals.'],['Ad copy variations','Several versions to test in your ads.'],['Multilingual','English, Sinhala and Tamil content.'],['One-click scheduling','Send approved posts straight to your planner.']],
 who:['Small businesses with no content team','Restaurants, shops and salons','Agencies producing content for clients','Personal brands and creators']},
{id:'social-planner',cat:'Marketing',name:'Social Media Planner & Scheduler',short:'Plan a month of content, schedule it across platforms and post at the best times.',
 lead:'See your whole month of social media at a glance. Plan posts, reels and stories, get team approval, and schedule everything to publish automatically at the times your audience is online.',
 mock:()=>M.cal(),
 feats:[['Content calendar','Drag-and-drop monthly plan for every platform.'],['Auto publishing','Facebook, Instagram, LinkedIn and TikTok.'],['Best time to post','Schedules for when your audience is active.'],['Team approval','Review and approve posts before they go live.'],['Campaign themes','Plan festivals, launches and seasonal offers.'],['Performance view','See which posts worked and do more of them.']],
 who:['Businesses posting on several platforms','Marketing teams and agencies','Brands running seasonal campaigns','Anyone who forgets to post']},
{id:'seo-tracker',cat:'Marketing',name:'SEO Audit & Rank Tracker',short:'Find what stops your website ranking on Google and track your progress every week.',
 lead:'Get found on Google. The tool audits your website for speed, content and technical problems, tells you exactly what to fix, and tracks your rankings for the keywords that bring customers.',
 mock:()=>M.table('Keyword rankings · Google',['KEYWORD','POSITION','CHANGE','VOLUME'],[['pos system sri lanka','4','<span class="pill g">▲ 6</span>','880'],['billing software colombo','7','<span class="pill g">▲ 3</span>','320'],['whatsapp chatbot','12','<span class="pill g">▲ 9</span>','1,900'],['ai automation company','18','<span class="pill w">▼ 2</span>','590']]),
 feats:[['Site audit','Speed, mobile, broken links and technical errors.'],['Clear fix list','Problems ranked by impact, explained simply.'],['Rank tracking','Weekly positions for your target keywords.'],['Competitor check','See who ranks above you and why.'],['Local SEO','Google Business Profile and map ranking.'],['Monthly report','Progress report you can share with your team.']],
 who:['Businesses with a new or quiet website','Local shops wanting map visibility','E-commerce stores','Agencies managing client SEO']},
{id:'ads-optimizer',cat:'Marketing',name:'Ads Campaign Optimizer',short:'Spend less per customer on Facebook, Instagram and Google ads with AI budget and audience tuning.',
 lead:'Stop wasting ad budget. The optimizer watches your Meta and Google campaigns every day, moves money to the ads that bring customers, pauses the ones that do not, and suggests better audiences.',
 mock:()=>M.table('Campaigns · Last 7 days',['AD','SPEND','COST / LEAD','ACTION'],[['Weekend offer · Reel','$120','$1.40','<span class="pill g">Budget +20%</span>'],['Brand video','$85','$3.90','<span class="pill w">Paused</span>'],['Retargeting','$60','$0.95','<span class="pill g">Budget +35%</span>'],['New audience test','$40','$2.10','<span class="pill o">Testing</span>']]),
 feats:[['Daily monitoring','Every campaign checked automatically every day.'],['Budget shifting','Money moves to the ads that perform.'],['Audience ideas','AI suggests new audiences to test.'],['Creative testing','Find the image and copy that converts best.'],['Conversion tracking','Pixel and conversions set up correctly.'],['Clear reporting','Spend, leads and sales in plain numbers.']],
 who:['Businesses spending on Meta or Google ads','E-commerce and lead generation brands','Agencies managing ad budgets','Anyone unsure if their ads work']},
{id:'email-sms',cat:'Marketing',name:'Email & SMS Marketing Automation',short:'Automatic welcome, offer and win-back messages that bring customers back again and again.',
 lead:'Your existing customers are your easiest sales. Set up automatic email and SMS journeys: welcome new customers, remind them of abandoned carts, celebrate birthdays and win back those who stopped buying.',
 mock:()=>M.table('Journeys · Active',['JOURNEY','SENT','OPENED','SALES'],[['Welcome series','1,240','58%','Rs 186K'],['Abandoned cart','412','49%','Rs 94K'],['Birthday offer','96','71%','Rs 38K'],['Win-back 60 days','530','32%','Rs 61K']]),
 feats:[['Ready journeys','Welcome, cart, birthday and win-back flows.'],['Email and SMS','Reach customers on the channel they read.'],['Segments','Different messages for new, loyal and inactive customers.'],['Branded templates','Beautiful emails that match your brand.'],['Sales tracking','See the revenue each message brings in.'],['Opt-out handling','Compliant unsubscribe on every message.']],
 who:['Online stores and retailers','Restaurants with loyalty programs','Gyms, salons and clinics','Subscription businesses']},
{id:'review-manager',cat:'Marketing',name:'Review & Reputation Manager',short:'Collect more 5-star Google reviews and reply to every review with AI help.',
 lead:'Reviews decide who customers choose. This tool asks happy customers for reviews at the right moment, alerts you to negative ones, and writes polite, personal replies for you to approve.',
 mock:()=>M.chat('Google reviews · AI replies',[['<span class="stars">★★★★★</span><br>Great service and fast delivery. Will order again!','Google review · Kasun'],['Thank you Kasun! We are glad the delivery was quick. See you on your next order 😊','AI draft · approved',1],['<span class="stars">★★☆☆☆</span><br>Waited 40 minutes for my order.','Google review · alert sent'],['We are sorry about the wait. Please message us so we can make it right.','AI draft · waiting approval',1]]),
 feats:[['Review requests','Automatic SMS or WhatsApp asks after each sale.'],['All reviews in one place','Google, Facebook and more together.'],['AI replies','Personal responses written for your approval.'],['Bad review alerts','Know instantly so you can fix the problem.'],['Rating trends','Track your average rating over time.'],['Review widget','Show your best reviews on your website.']],
 who:['Restaurants, hotels and cafes','Clinics and service businesses','Retail stores','Any business on Google Maps']},
{id:'data-analytics',cat:'Data & AI',name:'Data Analytics Dashboards',short:'Turn spreadsheets and sales data into live dashboards your whole team understands.',
 lead:'Your data already holds the answers. We connect your sales, finance and operations data and build live dashboards that show what is happening and why.',
 mock:()=>M.dash('Sales Dashboard · Q3 2026'),
 feats:[['Data connection','Excel, Google Sheets, POS, accounting and database sources.'],['Live dashboards','Power BI, Looker Studio or custom web dashboards.'],['Clean data','We fix duplicates, gaps and messy formats first.'],['Key metrics','Revenue, margins, top products, customer trends.'],['Drill down','Go from company view to branch, product and day.'],['Scheduled reports','Automatic email reports every week or month.']],
 who:['Owners who want a clear picture of the business','Finance and operations teams','Retail and distribution companies','Anyone living in spreadsheets']},
{id:'data-science',cat:'Data & AI',name:'Data Science Solutions',short:'Forecasting, customer segmentation and deep analysis for better business decisions.',
 lead:'Go beyond reports. Data science finds patterns in your data and turns them into forecasts and decisions: what will sell, which customers to target, where money is lost.',
 mock:()=>M.bars('Customer Segments · 12,480 customers',[['Loyal regulars',82,'31%'],['Big spenders',46,'14%'],['New customers',64,'22%'],['At risk',38,'12%'],['Occasional',70,'21%']]),
 feats:[['Sales forecasting','Predict next month and next season demand.'],['Customer segments','Group customers by behaviour for targeted marketing.'],['Price analysis','Find the price points that grow profit.'],['Root cause analysis','Understand why sales or quality changed.'],['A/B test analysis','Measure what actually works.'],['Clear findings','Results explained in plain language, not only charts.']],
 who:['Growing retail and e-commerce brands','Manufacturers and distributors','Banks, insurers and finance companies','Research and NGO projects']},
{id:'ml-models',cat:'Data & AI',name:'Predictive ML Models',short:'Predict sales, spot fraud and find customers about to leave, using models trained on your own data.',
 lead:'Machine learning models built for one job and trained on your own data: predicting demand, spotting fraud, flagging customers about to leave, or sorting documents.',
 mock:()=>M.code('churn_model · prediction',`customer_id   <b>C-20931</b>
last_visit    41 days ago
orders_90d    1
avg_spend     Rs 2,150

prediction    <b>LIKELY TO LEAVE</b>
confidence    87%
next_action   send 15% win-back offer`),
 feats:[['Demand forecasting','Order the right stock at the right time.'],['Churn prediction','Find customers likely to leave before they do.'],['Fraud detection','Flag unusual transactions automatically.'],['Recommendations','Suggest the right product to each customer.'],['Image classification','Sort, inspect or tag images automatically.'],['Deployed for use','Delivered as an API or inside your existing system.']],
 who:['E-commerce and retail','Banking and fintech','Logistics and manufacturing','Healthcare and insurance']},
{id:'ai-models',cat:'AI Automation',name:'Custom AI Assistants',short:'AI chatbots and assistants that know your products and policies, and answer customers and staff 24/7.',
 lead:'Generative AI that works for your business. We build website chatbots and internal assistants that learn your products, policies and processes, then answer questions instantly and accurately.',
 mock:()=>M.chat('Staff Assistant · HR policies',[['How many annual leave days do I get in my first year?','Staff · 10:12 AM'],['You get 14 days of annual leave in your first year, plus 7 casual days. Source: HR Policy 2026, section 4.2','AI assistant · 2 sec',1],['Can I carry unused days forward?',''],['Yes, up to 5 days into the next year. Want me to open a leave request?','AI assistant',1]]),
 feats:[['Website chatbot','Answers customer questions on your website 24/7.'],['Internal assistant','Staff ask questions about policies and get instant answers.'],['Answers with sources','Every answer points to the document it came from.'],['Multilingual','English, Sinhala and Tamil support.'],['Private and secure','Your data stays yours and is not shared.'],['Connected','Works with WhatsApp, email, CRM and your systems.']],
 who:['Customer service teams','HR, legal and finance departments','Companies with lots of paperwork','Education and training providers']},
{id:'mobile-apps',cat:'Systems & Apps',name:'Mobile Apps',short:'iOS and Android apps for ordering, booking, delivery and loyalty.',
 lead:'Put your business in your customer\'s pocket. We design and build mobile apps for iOS and Android, from ordering and delivery to bookings and loyalty.',
 mock:()=>M.phones(),
 feats:[['iOS and Android','One codebase, both app stores, lower cost.'],['Ordering and delivery','Menus, cart, payment and live order tracking.'],['Bookings','Appointments and reservations with reminders.'],['Loyalty and rewards','Points, offers and push notifications.'],['Admin panel','Manage products, orders and users from the web.'],['Store launch','We handle App Store and Google Play publishing.']],
 who:['Restaurants and delivery brands','Salons, clinics and gyms','Retail and e-commerce','Startups building a new product']}
];

const SVCS=[
['Software Development','Custom-built systems for how you work.',['Web applications','Business systems and portals','APIs and integrations'],['pos','billing','document-ai'],'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M9 9l-2 2 2 2M15 9l2 2-2 2M2 20h20"/>'],
['AI & Machine Learning','Smarter systems, real automation.',['Chatbots and AI assistants','Predictive models','Workflow automation'],['ai-models','ml-models','whatsapp-ai','workflow-automation'],'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'],
['Data Science & Insights','Decisions backed by real numbers.',['Dashboards and reporting','Data analysis','Business forecasting'],['data-analytics','data-science'],'<path d="M3 21h18M6 17v-5M11 17V7M16 17v-8M21 17V4"/>'],
['Mobile App Development','Your business, in their pocket.',['iOS and Android apps','Cross-platform builds','App design and launch'],['mobile-apps'],'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'],
['Digital Marketing','Get found, get chosen, get growth.',['Social media management','SEO and paid ads','Content and branding'],['marketing-analyzer','content-studio','social-planner','ads-optimizer'],'<path d="M3 11v2a1 1 0 001 1h3l6 4V6L7 10H4a1 1 0 00-1 1zM17 8a5 5 0 010 8M19.5 5.5a8.5 8.5 0 010 13"/>']
];
const byId=Object.fromEntries(S.map(s=>[s.id,s]));

/* ---------- pieces ---------- */
const img=(s,big)=>`<img class="photo" src="${IMG}${s.id}-640.jpg" srcset="${IMG}${s.id}-640.jpg 640w, ${IMG}${s.id}.jpg 1280w" sizes="${big?'(max-width:900px) 92vw, 560px':'(max-width:600px) 88vw, 360px'}" width="1280" height="800" alt="${ALT[s.id]||s.name}" ${big?'fetchpriority="high"':'loading="lazy"'} decoding="async" onerror="this.remove()">`;
const card=s=>`<a class="pcard g" href="${L(s.id)}"><div class="shot">${img(s)}</div><div class="txt"><span class="tag">${s.cat}</span><h3>${s.name}</h3><p>${s.short}</p><span class="go">View solution →</span></div></a>`;
const band=(h='Have an idea? Let\'s give it energy.')=>`<section><div class="wrap"><div class="band g"><h2>${h}</h2><div class="cta"><a class="btn" href="${L('contact')}\">Talk to us</a><a class="btn ghost" href="${L('solutions')}\">See solutions</a></div></div></div></section>`;
const svcBlock=()=>`<div class="svcs">${SVCS.map(v=>`<article class="svc g"><div class="ico"><svg viewBox="0 0 24 24">${v[4]}</svg></div><h3>${v[0].replace('&','&amp;')}</h3><p class="line">${v[1]}</p><ul>${v[2].map(x=>`<li>${x}</li>`).join('')}</ul><div class="rels">${v[3].map(r=>`<a class="rel" href="${L(r)}">${byId[r].name}</a>`).join('')}</div></article>`).join('')}</div>`;
const process=()=>`<section><div class="wrap"><div class="head"><span class="eyebrow">How we work</span><h2>A clear path from idea to impact.</h2></div><div class="steps">
<div class="step g"><span class="dot"></span><h3>Discover</h3><p>We learn your business, your goals and the problem worth solving.</p></div>
<div class="step g"><span class="dot"></span><h3>Design</h3><p>We plan the solution, timeline and cost before any code is written.</p></div>
<div class="step g"><span class="dot"></span><h3>Build</h3><p>We develop in short cycles and show you progress every step of the way.</p></div>
<div class="step g"><span class="dot"></span><h3>Launch &amp; grow</h3><p>We go live, measure results and keep improving with you.</p></div></div></div></section>`;

const arrowsHtml=`<div class="arrows"><button type="button" data-dir="-1" aria-label="Previous">←</button><button type="button" data-dir="1" aria-label="Next">→</button></div>`;
const rail=(title,items,extra='')=>`<div class="railbox"><div class="railhead"><div>${title}</div><div class="right">${extra}${arrowsHtml}</div></div><div class="rail">${items.map(card).join('')}</div><div class="dots" role="tablist" aria-label="Slides"></div></div>`;
const CATS=['Systems & Apps','AI Automation','Marketing','Data & AI'];
const GOALS=[
 ['Get more customers',['content-studio','social-planner','ads-optimizer','seo-tracker','review-manager','lead-followup','email-sms']],
 ['Reply to customers faster',['whatsapp-ai','meta-ai','ai-receptionist','ai-models','lead-followup']],
 ['Save time on admin',['workflow-automation','document-ai','billing','ai-receptionist','ai-models']],
 ['Understand my numbers',['data-analytics','data-science','ml-models','marketing-analyzer']],
 ['Run my business better',['pos','billing','mobile-apps','data-analytics']]
];
const svcMini=()=>`<div class="minis">${SVCS.map(v=>`<a class="mini g" href="${L('services')}\"><div class="ico"><svg viewBox="0 0 24 24">${v[4]}</svg></div><h3>${v[0].replace('&','&amp;')}</h3><p>${v[1]}</p></a>`).join('')}</div>`;

/* ---------- pages ---------- */
const P={
home:()=>`<div class="wrap hero"><div>
<span class="eyebrow">Ideas. Intelligence. Impact.</span>
<h1>From potential <br>to <em>power.</em></h1>
<p>MecQuad turns ideas into intelligent technology. We build custom software, AI solutions, data insights, mobile apps and digital marketing for businesses in Sri Lanka and around the world.</p>
<div class="cta"><a class="btn" href="${L('contact')}\">Book a free consultation</a><a class="btn ghost" href="${L('solutions')}\">Explore solutions</a></div></div>
<div class="stage g" aria-label="E equals M C squared turning into the MecQuad mark"><canvas id="eq"></canvas><div class="cap"><span>MASS</span><span>→</span><span>ENERGY</span></div></div></div>
<section><div class="wrap"><div class="head"><span class="eyebrow">Our solutions</span><h2>20+ solutions, tailored to your business.</h2><p class="muted">Swipe through our most popular ones. We adapt each one to your brand, data and workflow.</p></div>
${rail('<h3>Popular solutions</h3>',['pos','whatsapp-ai','billing','meta-ai','content-studio','marketing-analyzer','ai-receptionist','data-analytics','mobile-apps'].map(i=>byId[i]),`<a class="see" href="${L('solutions')}\">See all 20+ →</a>`)}</div></section>
<section><div class="wrap"><div class="head"><span class="eyebrow">The story behind our name</span><h2>MecQuad comes from E = MC².</h2><p class="muted">A small amount of mass holds a huge amount of energy. Every business idea works the same way. Our job is to release that energy.</p></div>
<div class="terms"><div class="term g"><span class="sym">M</span><h3>Mass: your idea</h3><p>The raw potential. A process to automate, a product to launch, data waiting to be understood.</p></div>
<div class="term g"><span class="sym">C</span><h3>C: our capability</h3><p>Engineering, AI and design skill that turns the idea into something that works.</p></div>
<div class="term g"><span class="sym">²</span><h3>Squared: the impact</h3><p>Measurable results. Faster teams, smarter decisions, more customers.</p></div></div></div></section>
<section><div class="wrap"><div class="head"><span class="eyebrow">Services</span><h2>Five services. One mission.</h2></div>${svcMini()}</div></section>
<section><div class="wrap"><div class="head"><span class="eyebrow">Industries</span><h2>Built for the businesses we know.</h2></div><div class="chips">${['Retail & supermarkets','Restaurants & cafes','Healthcare & pharmacies','Education','E-commerce','Logistics & delivery','Finance','Salons & wellness','Manufacturing','Hospitality & tourism'].map(c=>`<span class="chip g">${c}</span>`).join('')}</div></div></section>
${process()}${band()}`,

services:()=>`<div class="wrap"><div class="pagehead g"><span class="eyebrow">Services</span><h1>Everything you need to go <em>digital.</em></h1><p>From your first system to AI that runs parts of your business, we cover the full journey.</p></div></div>
<section ><div class="wrap">${svcBlock()}</div></section>${process()}${band()}`,

solutions:()=>`<div class="wrap"><div class="pagehead g"><span class="eyebrow">Solutions</span><h1>20+ solutions, <em>tailored</em> to your business.</h1><p>Pick a goal, search, or swipe through each category. We adapt every solution to your brand, data and workflow.</p></div></div>
<section style="padding-top:44px"><div class="wrap">
<div class="head" style="margin-bottom:16px"><span class="eyebrow">Start with your goal</span></div>
<div class="goals">${GOALS.map((g,i)=>`<button type="button" class="goal g" data-goal="${i}" aria-pressed="false"><strong>${g[0]}</strong><span>${g[1].length} solutions →</span></button>`).join('')}</div>
<div class="stoolbar g">
<label class="search" for="sq"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg><input id="sq" type="search" placeholder="Search solutions, e.g. WhatsApp, invoices, ads" autocomplete="off" aria-label="Search solutions"></label>
<div class="chipsrow" role="group" aria-label="Filter by category">${['All',...CATS].map((c,i)=>`<button type="button" data-cat="${c}" aria-pressed="${i==0}">${c}<small>${c==='All'?S.length:S.filter(s=>s.cat===c).length}</small></button>`).join('')}</div>
</div>
<div id="sview"></div>
</div></section>${band('Not sure which one fits? Let\'s talk.')}`,

about:()=>`<div class="wrap"><div class="pagehead g"><span class="eyebrow">About MecQuad</span><h1>We turn raw potential into <em>real results.</em></h1><p>MecQuad is a technology company from Sri Lanka building software, AI and data solutions for businesses around the world. Our name comes from E = MC²: small ideas hold enormous energy, and we build the technology that releases it.</p></div></div>
<section><div class="wrap mv">
<blockquote class="g"><span class="eyebrow">Our mission</span><p>Like mass converts to energy, we convert ideas into measurable business impact, building software, AI, and intelligent solutions that turn potential into progress.</p></blockquote>
<blockquote class="g"><span class="eyebrow">Our vision</span><p>To become the equation businesses trust when raw potential needs to become real results, a global partner where precision meets intelligence.</p></blockquote></div></section>
<section><div class="wrap"><div class="head"><span class="eyebrow">What we value</span><h2>How we work with every client.</h2></div><div class="feats">
<div class="feat g"><h4>Precision</h4><p>Clean code, clear plans and no surprises on cost or timeline.</p></div>
<div class="feat g"><h4>Intelligence</h4><p>We use AI and data where it creates real value, not for show.</p></div>
<div class="feat g"><h4>Impact</h4><p>Success is measured by results: time saved, sales grown, costs cut.</p></div>
<div class="feat g"><h4>Partnership</h4><p>We stay with you after launch with support and improvements.</p></div></div></div></section>
${band()}`,

privacy:()=>`<div class="wrap"><div class="pagehead g"><span class="eyebrow">Privacy Policy</span><h1>How we handle <em>your information.</em></h1><p>Last updated: 4 October 2026</p></div></div>
<section><div class="wrap policy">
<section><p>This policy explains what personal information MecQuad collects through this website, why we collect it, and the choices you have. We follow the principles of Sri Lanka's Personal Data Protection Act, No. 9 of 2022.</p></section>
<section><h2>Who we are</h2><p>MecQuad is a technology company based in Sri Lanka that builds software, AI, data and digital marketing solutions. You can contact us about privacy at <strong>info@mecquad.tech</strong> or <strong>+94 77 866 2627</strong>.</p></section>
<section><h2>What we collect</h2><ul>
<li><strong>Information you give us</strong> when you fill in the demo request form: your name, company, email address, phone or WhatsApp number, the solution you are interested in, and your message.</li>
<li><strong>Messages you send us</strong> by email, WhatsApp or phone.</li>
<li><strong>Basic technical data</strong> such as your IP address and browser type, which our hosting provider records automatically to deliver and protect the website.</li></ul>
<p>We do not use advertising or tracking cookies on this website. We do not ask for payment details here.</p></section>
<section><h2>Why we use it</h2><ul>
<li>To reply to your enquiry and arrange a demo or consultation.</li>
<li>To prepare a proposal or quotation you asked for.</li>
<li>To deliver and support a project if you become our client.</li>
<li>To keep the website secure and working properly.</li></ul>
<p>We only use your information for these purposes. We never sell it, and we do not add you to marketing lists without your permission.</p></section>
<section><h2>Services that help us</h2><p>We use a few trusted services to run this website and reply to you. They process your information only to provide their service:</p><ul>
<li><strong>Vercel</strong> hosts this website.</li>
<li><strong>FormSubmit</strong> delivers the demo request form to our email inbox.</li>
<li><strong>Google</strong> provides our email (Gmail) and the fonts used on this website.</li>
<li><strong>WhatsApp (Meta)</strong> if you choose to message us on WhatsApp.</li></ul>
<p>Some of these services store data on servers outside Sri Lanka.</p></section>
<section><h2>How long we keep it</h2><p>We keep enquiry details for up to 2 years so we can follow up on your request. If you become a client, we keep project records for as long as needed to provide our services and meet legal requirements. You can ask us to delete your details sooner.</p></section>
<section><h2>Your rights</h2><p>You can ask us to:</p><ul>
<li>Show you the personal information we hold about you.</li>
<li>Correct information that is wrong or out of date.</li>
<li>Delete your information.</li>
<li>Stop using your information, or withdraw your consent at any time.</li></ul>
<p>Email <strong>info@mecquad.tech</strong> with your request. We will reply within 21 working days.</p></section>
<section><h2>Keeping it safe</h2><p>We protect your information with secure, password-protected accounts and share it only with people at MecQuad who need it to help you.</p></section>
<section><h2>Changes to this policy</h2><p>We may update this policy when our services change. The date at the top shows when it was last updated.</p></section>
<div class="box2 g"><h2 style="margin-bottom:8px">Questions?</h2><p>Email <strong>info@mecquad.tech</strong> or WhatsApp <strong>+94 77 866 2627</strong>.</p></div>
</div></section>`,

contact:()=>`<div class="wrap"><div class="pagehead g"><span class="eyebrow">Contact</span><h1>Have an idea? Let's give it <em>energy.</em></h1><p>Request a demo or tell us what you want to build. We reply within one business day.</p></div></div>
<section><div class="wrap contact">
<form id="f" class="g" novalidate>
<h3 style="font-size:22px">Request a demo</h3>
<div class="grid2">
<label for="c-name"><span>Your name <span class="req">*</span></span><input id="c-name" name="name" autocomplete="name" placeholder="Kasun Perera"></label>
<label for="c-co">Company<input id="c-co" name="company" autocomplete="organization" placeholder="Your business name"></label>
<label for="c-email"><span>Email <span class="req">*</span></span><input id="c-email" type="email" name="email" autocomplete="email" placeholder="you@company.com"></label>
<label for="c-phone">Phone / WhatsApp<input id="c-phone" type="tel" name="phone" autocomplete="tel" placeholder="+94 7X XXX XXXX"></label>
</div>
<label for="c-need">I'm interested in<select id="c-need" name="solution">${S.map(s=>`<option>${s.name}</option>`).join('')}<option>Something else</option></select></label>
<label for="c-msg">Tell us about your project<textarea id="c-msg" name="message" placeholder="What do you want to build, and by when?"></textarea></label>
<input type="text" id="c-hp" name="_honey" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">
<button class="btn" id="send" type="submit" style="justify-self:start">Send request</button>
<p class="formnote">By sending this form you agree that MecQuad may use your details to reply to your request. See our <a href="${L('privacy')}\">Privacy Policy</a>.</p>
<div id="status" class="status" role="status" hidden></div>
</form>
<div class="mailbox g">
<span class="eyebrow">Talk to us directly</span>
<div class="cline"><span class="muted" style="font-size:14px">Phone and WhatsApp</span><a class="mail mlink" href="tel:${TEL}">${PHONE}</a></div>
<div class="cta"><a class="btn wa" href="https://wa.me/${WA}" target="_blank" rel="noopener">Chat on WhatsApp</a><a class="btn ghost" href="tel:${TEL}">Call us</a></div>
<div class="cline" style="margin-top:8px"><span class="muted" style="font-size:14px">Email</span><a class="mail mlink" id="mail" href="mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from the MecQuad website')}">${EMAIL}</a></div>
<div class="cta"><a class="btn" href="mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from the MecQuad website')}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>Email us</a></div>
<p class="muted" style="font-size:15px">Colombo, Sri Lanka · Working remotely with clients worldwide.</p></div>
</div></section>`
};

function detail(s){
 const others=S.filter(o=>o.id!==s.id&&o.cat===s.cat).concat(S.filter(o=>o.cat!==s.cat)).slice(0,8);
 return `<div class="wrap"><div class="pd g"><div class="intro"><span class="crumb"><a href="${L('solutions')}\">Solutions</a> / ${s.cat}</span><h1>${s.name}</h1><p class="lead">${s.lead}</p>
<div class="cta"><a class="btn" href="${L('contact')+(STATIC?'?need='+s.id:'')}" data-need="${s.id}">Request a demo</a><a class="btn ghost" href="${L('solutions')}\">All solutions</a></div></div>
<div class="pd-photo">${img(s,true)}</div></div></div>
<section><div class="wrap"><div class="head"><span class="eyebrow">Features</span><h2>What it does.</h2></div><div class="feats">${s.feats.map(f=>`<div class="feat g"><h4>${f[0]}</h4><p>${f[1]}</p></div>`).join('')}</div></div></section>
<section><div class="wrap"><div class="two g"><div class="head" style="margin:0"><span class="eyebrow">Who it's for</span><h2>Made for businesses like yours.</h2><p class="muted">We customise every installation to your brand, workflow and language.</p></div><ul class="list">${s.who.map(w=>`<li>${w}</li>`).join('')}</ul></div></div></section>
<section><div class="wrap"><div class="head" style="margin-bottom:8px"><span class="eyebrow">More solutions</span></div>${rail('<h2 style="font-size:clamp(26px,3.4vw,38px);font-weight:800">You might also need.</h2>',others)}</div></section>
${band('See the '+s.name+' working with your own data.')}`;
}

/* ---------- router ---------- */
const app=document.getElementById('app');let wantNeed=null;
function curRoute(){
 if(!STATIC) return (location.hash||'#home').slice(1)||'home';
 let p=location.pathname.replace(/\/index\.html$/,'/').replace(/\.html$/,'').replace(/\/+$/,'')||'/';
 if(p==='/') return 'home';
 const m=p.match(/^\/solutions\/([^/]+)$/);
 if(m){const id=Object.keys(SLUG).find(k=>SLUG[k]===m[1]);return id||'404';}
 return Object.keys(ROUTES).find(k=>ROUTES[k]===p)||'404';
}
function route(){
 const r=curRoute();
 const s=byId[r];
 const pre=app.hasAttribute('data-pre');
 if(!pre) app.innerHTML=s?detail(s):(P[r]||P.home)();
 const top=s?'solutions':(P[r]?r:'home');
 document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on',a.dataset.r===top));
 if(!STATIC) document.title=s?s.name+' · MecQuad':(top==='home'?'MecQuad':top==='privacy'?'Privacy Policy · MecQuad':top[0].toUpperCase()+top.slice(1)+' · MecQuad');
 document.getElementById('links').classList.remove('open');document.getElementById('menu').setAttribute('aria-expanded','false');
 if(!pre) scrollTo(0,0);
 document.body.classList.toggle('on-detail',!!s);
 if(s){const db=document.getElementById('demobtn');db.dataset.need=s.id;if(STATIC)db.href=L('contact')+'?need='+s.id;}
 if(top==='home')hero();
 if(r==='solutions')filters();
 if(r==='contact')contact();
 rails();
}
if(!STATIC) addEventListener('hashchange',()=>{app.removeAttribute('data-pre');route();});
else{const legacy=()=>{const h=location.hash.slice(1);if(byId[h]||ROUTES[h])location.replace(L(h));};legacy();addEventListener('hashchange',legacy);} // old #links keep working
document.addEventListener('click',e=>{const a=e.target.closest('[data-need]');if(a)wantNeed=byId[a.dataset.need].name;});
document.getElementById('menu').addEventListener('click',e=>{const l=document.getElementById('links');const o=l.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o);});
const fsol=document.getElementById('fsol');
if(!fsol.children.length) fsol.innerHTML=['pos','billing','whatsapp-ai','meta-ai','content-studio','data-analytics','mobile-apps'].map(i=>`<li><a href="${L(i)}">${byId[i].name}</a></li>`).join('')+`<li><a href="${L('solutions')}" style="color:#f38c4f">All 20+ solutions →</a></li>`;

const defaultRows=()=>`<div class="rows">${CATS.map(c=>{const it=S.filter(s=>s.cat===c);return rail(`<h2 class="cathead">${c.replace('&','&amp;')}<span class="count">${it.length} solutions</span></h2>`,it)}).join('')}</div>`;
const ST={cat:'All',goal:null,q:''};
function solView(){
 const v=document.getElementById('sview');if(!v)return;
 const q=ST.q.trim().toLowerCase();
 document.querySelectorAll('.chipsrow button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.cat===ST.cat&&ST.goal===null));
 document.querySelectorAll('.goal').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.goal===ST.goal)));
 if(!q&&ST.goal===null&&ST.cat==='All'){
  if(!v.querySelector('.rows')) v.innerHTML=defaultRows();
 }else{
  let list,label;
  if(q){list=S.filter(s=>[s.name,s.short,s.lead,s.cat,...s.feats.flat(),...s.who].join(' ').toLowerCase().includes(q));label=`for “${ST.q.trim().replace(/</g,'')}”`;}
  else if(ST.goal!==null){list=GOALS[ST.goal][1].map(i=>byId[i]);label=`to ${GOALS[ST.goal][0].toLowerCase()}`;}
  else{list=S.filter(s=>s.cat===ST.cat);label=`in ${ST.cat.replace('&','&amp;')}`;}
  v.innerHTML=list.length?`<div class="reshead"><h3>${list.length} solution${list.length>1?'s':''} ${label}</h3><button type="button" class="btn ghost" id="sclear">Show all categories</button></div><div class="grid">${list.map(card).join('')}</div>`
   :`<div class="empty g"><h3>No solution matches “${ST.q.trim().replace(/</g,'')}” yet.</h3><p class="muted">We build custom systems too. Tell us what you need and we will suggest the right fit.</p><div class="cta"><a class="btn" href="${L('contact')}\">Tell us what you need</a><button type="button" class="btn ghost" id="sclear">Show all categories</button></div></div>`;
 }
 rails();
}
function filters(){
 ST.cat='All';ST.goal=null;ST.q='';solView();
 const top=()=>{const t=document.querySelector('.stoolbar');if(t&&t.getBoundingClientRect().top>window.innerHeight*.6||t.getBoundingClientRect().top<0)t.scrollIntoView({behavior:'smooth',block:'start'});};
 document.querySelectorAll('.chipsrow button').forEach(b=>b.addEventListener('click',()=>{ST.cat=b.dataset.cat;ST.goal=null;ST.q='';document.getElementById('sq').value='';solView();}));
 document.querySelectorAll('.goal').forEach(b=>b.addEventListener('click',()=>{const g=+b.dataset.goal;ST.goal=ST.goal===g?null:g;ST.cat='All';ST.q='';document.getElementById('sq').value='';solView();top();}));
 document.getElementById('sq').addEventListener('input',e=>{ST.q=e.target.value;ST.goal=null;ST.cat='All';solView();});
 document.getElementById('sview').addEventListener('click',e=>{if(e.target.id==='sclear'){ST.cat='All';ST.goal=null;ST.q='';document.getElementById('sq').value='';solView();}});
}
function geo(r){const c=r.querySelector('.pcard');if(!c)return null;const gap=parseFloat(getComputedStyle(r).columnGap)||18;const step=c.offsetWidth+gap;const per=Math.max(1,Math.round((r.clientWidth-12+gap)/step));const n=r.children.length;return{step,per,pages:Math.max(1,Math.ceil(n/per))};}
function upd(r){const box=r.closest('.railbox');if(!box)return;const g=geo(r);if(!g)return;
 const atEnd=r.scrollLeft+r.clientWidth>=r.scrollWidth-8;
 const page=atEnd?g.pages-1:Math.min(g.pages-1,Math.round(r.scrollLeft/(g.step*g.per)));
 box.classList.toggle('single',g.pages<=1);
 const d=box.querySelector('.dots');
 if(d){if(d.children.length!==g.pages){d.innerHTML=Array.from({length:g.pages},(_,i)=>`<button type="button" role="tab" aria-label="Slide ${i+1} of ${g.pages}" data-page="${i}"></button>`).join('');}
  [...d.children].forEach((b,i)=>b.setAttribute('aria-current',String(i===page)));}
 const b=box.querySelectorAll('.arrows button');if(b.length){b[0].disabled=r.scrollLeft<8;b[1].disabled=r.scrollLeft+r.clientWidth>=r.scrollWidth-8;}}
function rails(){document.querySelectorAll('.rail').forEach(upd);}
document.addEventListener('click',e=>{
 const b=e.target.closest('.arrows button'),dot=e.target.closest('.dots button');if(!b&&!dot)return;
 const r=(b||dot).closest('.railbox').querySelector('.rail'),g=geo(r);if(!g)return;
 if(b){const atEnd=r.scrollLeft+r.clientWidth>=r.scrollWidth-8;const cur=atEnd?g.pages-1:Math.round(r.scrollLeft/(g.step*g.per));const page=cur+(+b.dataset.dir);r.scrollTo({left:Math.max(0,page)*g.step*g.per,behavior:'smooth'});}
 else r.scrollTo({left:+dot.dataset.page*g.step*g.per,behavior:'smooth'});
});
document.addEventListener('scroll',e=>{if(e.target.classList&&e.target.classList.contains('rail'))upd(e.target);},true);
addEventListener('resize',rails);
async function copyText(t,el,ok){try{await navigator.clipboard.writeText(t);el.textContent=ok;return true}catch(e){return false}}
function contact(){
 if(STATIC){const n=new URLSearchParams(location.search).get('need');if(byId[n])wantNeed=byId[n].name;}
 if(wantNeed){document.getElementById('c-need').value=wantNeed;wantNeed=null;}
 const f=document.getElementById('f'),st=document.getElementById('status'),btn=document.getElementById('send');
 const show=(cls,html)=>{st.className='status '+cls;st.innerHTML=html;st.hidden=false;};
 f.addEventListener('submit',async e=>{
  e.preventDefault();
  const v=id=>document.getElementById(id).value.trim();
  const name=v('c-name'),email=v('c-email');
  if(!name){document.getElementById('c-name').focus();return show('err','Please add your name.');}
  if(!/^\S+@\S+\.\S+$/.test(email)){document.getElementById('c-email').focus();return show('err','Please add a valid email so we can reply.');}
  if(v('c-hp'))return;
  btn.disabled=true;btn.textContent='Sending…';
  const data={name,email,phone:v('c-phone')||'-',company:v('c-co')||'-',solution:v('c-need'),message:v('c-msg')||'-',
   _subject:'New demo request: '+v('c-need')+' ('+name+')',_template:'table',_captcha:'false'};
  try{
   const r=await fetch(FORM_URL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
   const j=await r.json().catch(()=>({}));
   if(/activat/i.test(j.message||'')){show('err','This form is being set up. Your details were received, but the form owner must first click the activation link sent to '+EMAIL+'. Meanwhile, please WhatsApp <strong>'+PHONE+'</strong>.');return;}
   if(!r.ok||String(j.success)==='false')throw new Error(j.message||('HTTP '+r.status));
   f.reset();show('ok','Thank you, '+name.replace(/</g,'')+'. Your request has reached our team. We will reply within one business day.');
  }catch(err){
   console.warn('Form error:',err&&err.message);
   show('err','We could not send your request right now. Please email <strong>'+EMAIL+'</strong> or WhatsApp <strong>'+PHONE+'</strong> and we will reply quickly.');
  }finally{btn.disabled=false;btn.textContent='Send request';}
 });
}

/* ---------- hero equation animation ---------- */
let raf;
const MARK=new Image();MARK.src='/assets/mark.png';
function hero(){
 cancelAnimationFrame(raf);
 const c=document.getElementById('eq');if(!c)return;const x=c.getContext('2d');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let W,H,dpr,P=[],mb,cy;
 function pts(draw){const o=document.createElement('canvas');o.width=W;o.height=H;const g=o.getContext('2d');draw(g);
  const d=g.getImageData(0,0,W,H).data,out=[],st=Math.max(3,Math.round(3*dpr));
  for(let y=0;y<H;y+=st)for(let i=0;i<W;i+=st){const j=(y*W+i)*4;if(d[j+3]>150)out.push([i,y,d[j+1]>180?1:0]);}
  for(let i=out.length-1;i>0;i--){const k=Math.random()*(i+1)|0;[out[i],out[k]]=[out[k],out[i]];}return out;}
 function build(){
  dpr=Math.min(devicePixelRatio||1,2);const r=c.getBoundingClientRect();
  W=c.width=Math.max(1,Math.round(r.width*dpr));H=c.height=Math.max(1,Math.round(r.height*dpr));cy=H*.44;
  const mw=W*.58,mh=mw*MARK.naturalHeight/MARK.naturalWidth;mb=[(W-mw)/2,cy-mh/2,mw,mh];
  const A=pts(g=>{g.font='800 '+W*.16+'px Montserrat, sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';g.fillText('E = MC²',W/2,cy);});
  const B=pts(g=>g.drawImage(MARK,...mb));
  const n=Math.max(A.length,B.length);P=[];
  for(let i=0;i<n;i++){const a=A[i%A.length],b=B[i%B.length],ang=Math.random()*Math.PI*2,rad=W*(.25+Math.random()*.35);
   P.push({a,b,d:Math.random(),cx:W/2+Math.cos(ang)*rad,cy:cy+Math.sin(ang)*rad,w:b[2]});}
 }
 const cl=v=>Math.max(0,Math.min(1,v)),ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
 function glowText(txt,y,size,alpha,blur){
  x.save();x.globalAlpha=alpha;x.font='800 '+size+'px Montserrat, sans-serif';x.textAlign='center';x.textBaseline='middle';
  const g=x.createLinearGradient(0,y-size/2,0,y+size/2);g.addColorStop(0,'#ffd2b0');g.addColorStop(.55,'#ff8a45');g.addColorStop(1,'#e2560f');
  x.shadowColor='rgba(236,106,34,.9)';x.shadowBlur=blur;x.fillStyle=g;x.fillText(txt,W/2,y);x.shadowBlur=blur*.4;x.fillText(txt,W/2,y);x.restore();}
 function frame(ts){
  if(!document.body.contains(c))return;
  const t=reduce?.7:(ts%9500)/9500;
  x.clearRect(0,0,W,H);
  const textA=t<.06?t/.06:t<.2?1:t<.28?1-(t-.2)/.08:0;
  const logoA=t<.5?0:t<.58?(t-.5)/.08:t<.9?1:1-(t-.9)/.1;
  const partA=t<.19?0:t<.25?(t-.19)/.06:t<.52?1:t<.62?1-(t-.52)/.1:0;
  const pulse=.75+.25*Math.sin(ts/380);
  if(textA>0)glowText('E = MC²',cy,W*.16,textA,28*dpr*pulse);
  if(partA>0){
   x.save();x.globalCompositeOperation='lighter';const m=cl((t-.24)/.26),sz=1.7*dpr;
   for(const p of P){const k=ease(cl(m*1.35-p.d*.35)),u=1-k;
    const px=u*u*p.a[0]+2*u*k*p.cx+k*k*p.b[0],py=u*u*p.a[1]+2*u*k*p.cy+k*k*p.b[1];
    x.globalAlpha=partA*(.55+.45*Math.sin(p.d*40+ts/120)**2);
    x.fillStyle=k>.6&&p.w?'#fff4ea':(p.d>.85?'#ffd2b0':'#ff7a2e');
    x.fillRect(px,py,sz,sz);}
   x.restore();}
  if(t>.48&&t<.66){const pr=(t-.48)/.18;x.save();x.globalAlpha=(1-pr)*.8;x.strokeStyle='#ff8a45';x.lineWidth=2*dpr;x.shadowColor='#ec6a22';x.shadowBlur=20*dpr;
   x.beginPath();x.arc(W/2,cy,pr*W*.55,0,Math.PI*2);x.stroke();x.restore();}
  if(logoA>0){
   x.save();x.globalAlpha=logoA;x.shadowColor='rgba(236,106,34,.85)';x.shadowBlur=36*dpr*pulse;x.drawImage(MARK,...mb);x.shadowBlur=0;x.drawImage(MARK,...mb);
   x.font='800 '+W*.085+'px Montserrat, sans-serif';x.textBaseline='middle';const y=mb[1]+mb[3]+W*.1;
   const w1=x.measureText('Mec').width,w2=x.measureText('Quad').width,sx=(W-w1-w2)/2;
   x.textAlign='left';x.fillStyle='#ffffff';x.fillText('Mec',sx,y);x.fillStyle='#ec6a22';x.fillText('Quad',sx+w1,y);x.restore();}
  if(!reduce)raf=requestAnimationFrame(frame);
 }
 Promise.all([document.fonts?document.fonts.ready:0,MARK.decode?MARK.decode().catch(()=>0):0]).then(()=>{build();raf=requestAnimationFrame(frame);});
 let to;window.onresize=()=>{clearTimeout(to);to=setTimeout(()=>{if(document.body.contains(c)){build();if(reduce)frame(0);}},200);};
}
if(!window.MQ_BUILD)route();
