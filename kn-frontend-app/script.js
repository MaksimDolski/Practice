 // All the data from JSON getting
 $(function() {
     // /datafile.json for permanent using
     $.getJSON('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0', function(data) {
         method: "POST",
         $.each(data, function(key, value) {
             $("<tr>" +
                 "<td class='main-data order'>" + value.orderNo + "</td>" +
                 "<td class='main-data date'>" + value.date + "</td>" +
                 "<td class='main-data customer'>" + value.customer + "</td>" +
                 "<td class='main-data trackingNo'>" + value.trackingNo + "</td>" +
                 "<td class='main-data status'>" + value.status + "</td>" +
                 "<td class='main-data consignee'>" + value.consignee + "</td>" +

                 // Two buttons adding:
                 "<td class='main-data-btn'> <button class='btn btn-open'></button>" + "</td>" +
                 "<td class='main-data-btn'> <button class='btn btn-close' value='close'></button>" + "</td >" +
                 "</tr>").appendTo('.main-table');

         });
     });
 }); // All the data from JSON getting - end


 // Row removing
 $(".main-table").on('click', '.btn-close', function() {
     $(this).closest('tr').fadeOut(150, function() {
         $(this).closest('tr').remove()
     })
 })

 // Modal window, btn close
 $('.close, .btn-shipment-close').click(function() {
     $(".modal").css({
         display: "none"
     });
 });

 // btn on the table window
 $('.main-table').on('click', '.btn-open', function() {

     $(".modal").css({
         display: "block"
     });

     // loop for the all rows
     // let data = $(this).closest('tr').find('td').map(function() {
     //      return $(this).text()
     //  })
     //  $('#order').val(data[0])
     //  $('#date').val(data[1])
     //  $('#customer').val(data[2])
     //  $('#trackingNo').val(data[3])
     //  $('#status').val(data[4])
     //  $('#consignee').val(data[5])
     //  }) 

     let row = $(this).closest('tr')
     for (let i = 0; i < row.length; i++) {

         let orderTable = $(row[i]).find('.order').text()
         let dateTable = $(row[i]).find('.date').text()
         let customerTable = $(row[i]).find('.customer').text()
         let trackingNoTable = $(row[i]).find('.trackingNo').text()
         let statusTable = $(row[i]).find('.status').text()
         let consigneeTable = $(row[i]).find('.consignee').text()

         $('#order').val(orderTable)
         $('#date').val(dateTable)
         $('#customer').val(customerTable)
         $('#trackingNo').val(trackingNoTable)
         $('#status').val(statusTable)
         $('#consignee').val(consigneeTable)


         // Rows looping and save the changes
         $('.shipment-form').on('click', '.btn-shipment-save', function() {

             //  getting changed input values
             let changedData = $(this).closest('div.shipment-form').find('input').map(function() {
                 return $(this).val()
             })

             let newOrder = $('#order').text(changedData[0]).val()
             let newDate = $('#date').text(changedData[1]).val()
             let newCustomer = $('#customer').text(changedData[2]).val()
             let newTrackingNo = $('#trackingNo').text(changedData[3]).val()
             let newStatus = $('#status').text(changedData[4]).val()
             let newConsignee = $('#consignee').text(changedData[5]).val()

             $(row[i]).find('.order').text(newOrder)
             $(row[i]).find('.date').text(newDate)
             $(row[i]).find('.customer').text(newCustomer)
             $(row[i]).find('.trackingNo').text(newTrackingNo)
             $(row[i]).find('.status').text(newStatus)
             $(row[i]).find('.consignee').text(newConsignee)

             // save and close
             $(".modal").css({
                 display: "none"
             });
         })
     }
 })