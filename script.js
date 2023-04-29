function get() {
    let row = document.createElement('tr');
    let table = document.getElementById('table');




    let data1 = document.getElementById('firstName').value;
    let work1 = document.createElement('td');
    work1.style.color = 'black';
    work1.innerHTML = data1;
    let data2 = document.getElementById('secondName').value;
    let work2 = document.createElement('td');
    work2.style.color = 'black';
    work2.innerHTML = data2;
    let data3 = document.getElementById('address').value;
    let work3 = document.createElement('td');
    work3.style.color = 'black';
    work3.innerHTML = data3;
    let data4 = document.getElementById('Pincode').value;
    let work4 = document.createElement('td');
    work4.style.color = 'black';
    work4.innerHTML = data4;
    let data5 = document.getElementById('gender').value;
    let work5 = document.createElement('td');
    work5.style.color = 'black';
    work5.innerHTML = data5;
    let data6 = document.getElementById('status').value;
    let data7 = document.getElementById('status2').value;
    let work6 = document.createElement('td');
    let work7 = document.createElement('td');
    work6.style.color = 'black';
    work7.style.color = 'black';
    work6.innerHTML = data6;
    work7.innerHTML = data7;
    let data8 = document.getElementById('state').value;
    let work8 = document.createElement('td');
    work8.style.color = 'black';
    work8.innerHTML = data8;
    let data9 = document.getElementById('country').value;
    let work9 = document.createElement('td');
    work9.style.color = 'black';
    // work9.style.padding = '0px 0px 0px 10px';
    work9.innerHTML = data9;




    row.append(work1, work2, work3, work4, work5, work6, work7, work8, work9);
    // row.append(work2);
    table.append(row);
    // document.body.append(work);
}