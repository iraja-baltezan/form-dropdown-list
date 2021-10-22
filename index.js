window.addEventListener("load", function() {
    (function (){
        var productsArray=[
            ['KA-1',    'THS-18     3.0 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-2',    'THS-18     4.0 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-3',    'THS-18     5.0 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-4',    'THS-18     6.0 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-5',    'THS-18     7.5 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-6',    'THS-18    10.0 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-7',    'THS-18    12.5 cv',    'SUC 2”    REC 1½”'  ],
            ['KA-8',    'THB-18    10.0 cv',    'SUC 3”    REC 2½”'  ],
            ['KA-9',    'THB-18    12.5 cv',    'SUC 3”    REC 2½”'  ],
            ['KA-10',   'THB-18    15.0 cv',    'SUC 3”    REC 2½”'  ],
            ['KA-11',   'THB-18    20.0 cv',    'SUC 3”    REC 2½”'  ],
            ['KA-26',   'TH-18      3,0 cv',    'SUC 2”    REC 2½”'  ],
            ['KA-27',   'THS-18     5,0 cv',    'SUC 2”    REC 2½”'  ],
            ['KA-28',   'THS-18     7,5 cv',    'SUC 2”    REC 2½”'  ],
            ['KA-29',   'THS-18    10,0 cv',    'SUC 2”    REC 2½”'  ],
            ['KR-1',    'B-12-NR    0,5 cv',    'SUC ¾”    REC ¾”'   ],
            ['KR-2',    'TH-16-NR   1,0 cv',    'SUC 1”    REC 1”'   ],
            ['KR-3',    'TH-16-NR   1,5 cv',    'SUC 1¼”   REC 1”'   ],
            ['KR-4',    'TH-16-NR   2,0 cv',    'SUC 1¼”   REC 1”'   ],
            ['KR-5',    'TH-16-NR   3,0 cv',    'SUC 1¼”   REC 1”'   ],
            ['KR-6',    'THS-18-R   5,0 cv',    'SUC 2”    REC 1½”'  ],
            ['KR-7',    'THS-18-R   7,5 cv',    'SUC 2”    REC 1½”'  ],
            ['KR-8',    'THS-18-R  10,0 cv',    'SUC 2”    REC 1½”'  ],
            ['PLUS-1',  'P-11/2     1,0 cv',    'SUC 1”    REC 1”'   ],
            ['PLUS-2',  'P-11/3     1,5 cv',    'SUC 1”    REC 1”'   ],
            ['PLUS-3',  'P-11/3     2,0 cv',    'SUC 1”    REC 1”'   ],
            ['PLUS-4',  'P-11/4     3,0 cv',    'SUC 1”    REC 1”'   ],
            ['PLUS-11', 'P-15/2-F   3,0 cv',    'SUC 1½”   REC 1½”'  ],
            ['PLUS-12', 'P-15/2-K   4,0 cv',    'SUC 1½”   REC 1½”'  ],
            ['PLUS-13', 'P-15/2-N   5,0 cv',    'SUC 1½”   REC 1½”'  ],
            ['PLUS-14', 'P-15/3-K   6,0 cv',    'SUC 1½”   REC 1½”'  ],
        ]

        var htmlProductsQuoteInput  = document.getElementsByClassName('ibj-frm-prods__quote-input')[0]
        var htmlProductsOpts        = document.getElementsByClassName('ibj-frm-prods__opts')[0]
        var optTemplate             = document.getElementById("ibj-frm-prods__opt-template").innerText
        var quoteItemTemplate       = document.getElementById("ibj-frm-prods__quote-item-template").innerText
        var htmlProductsQuoteList   = document.getElementsByClassName('ibj-frm-prods__quote-list')[0]

        var quoteItemsQuantityArray = []

        function productsModelSelectAddOpts(){
            var bufferOpts = ''
            var bufferOpt = ''
            for(var i=0; i < productsArray.length; i++){
                bufferOpt = optTemplate
                    .replace('{{idx}}', i)
                    .replace('{{model}}', productsArray[i][0])
                    .replace('{{pump}}', productsArray[i][1])
                    .replace('{{pipe}}', productsArray[i][2])
                bufferOpts += bufferOpt
            }
            htmlProductsOpts.innerHTML = bufferOpts
        }

        function quoteAddItem(itemIndex){
            if (quoteItemsQuantityArray[itemIndex] > 0){
                quoteItemsQuantityArray[itemIndex]++ // console.log('Item já existe')
            }
            else {
                quoteItemsQuantityArray[itemIndex]=1 // console.log('Item não existe')
            }
            quoteListUpdate(quoteItemsQuantityArray, productsArray)
        }

        function quoteListUpdate(quoteItemsQuantityArray){
            var bufferQuoteList = ''
            var bufferQuoteItem = ''
            for (var i=0; i < quoteItemsQuantityArray.length; i++){
                if (quoteItemsQuantityArray[i] > 0) {
                    bufferQuoteItem = quoteItemTemplate
                    .replace('{{idx}}', i)
                    .replace('{{model}}', productsArray[i][0])
                    .replace('{{pump}}', productsArray[i][1])
                    .replace('{{pipe}}', productsArray[i][2])
                    .replace('{{qty}}', quoteItemsQuantityArray[i])
                    bufferQuoteList += bufferQuoteItem
                }
            }
            htmlProductsQuoteList.innerHTML = bufferQuoteList
        }

        htmlProductsOpts.addEventListener("click", function(event){
            var idx = event.target.dataset.idx
            if (!idx){
                idx = event.target.parentElement.dataset.idx
            }
            quoteAddItem(idx)
        })

        productsModelSelectAddOpts()
    })()
});
