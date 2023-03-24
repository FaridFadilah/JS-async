/**
 * Apa itu AJAX
 *  - AJAX adalah Asynchronous Javascript And XML
 *  - AJAX biasanya dipakai untuk mengambil atau mengirim data ke URL lain
 *  - untuk membuat AJAX, kita bisa menggunakan class XMLHttpRequest 
 *  - http://developer.mozila.org/en-US/docs/Web/API/XMLHttpRequest
 * 
 * Cara kerja AJAX
 *    Ajax => send Request => Server
 *    Server => Receive Response => AJAX
 *    AJAX => Render Response => WEB
 * 
 * Menerima Data di AJAX
 *  - AJAX biasanya digunakan untuk mengirim data ke Server atau menerima data dari Server
 *  - Tiap request AJAX yang dilakukan, biasanya kita ingin mendapat informasi response yang diberikan oleh Server
 *  - Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adalah Async, sehingga kita perlu menunggu sampai 
 *    proses Async nya selesai 
 *  - Untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX Callback, yang akan dieksekusi setelah proses AJAX selesai
 *  - Dan untuk mengambil datanya dari Server, Kita bisa menggunakan property responseText
 *  - https://developer.mozilla.org/en-US/docs/WEB/API/XMLHttpRequest/load_event
 * 
 * Response Status AJAX
 *  - AJAX adalah proses komunikasi Client to Server
 *  - Dalam komunikasi Client ke Server, kita tidak bisa selalu menganggap proses tersebut akan berjalan lancar
 *  - Akan ada banyak hal - hal yang bisa mengganggu proses AJAX yang bisa menyebabkan error seperti : Koneksi internet 
 *    bermasalah, error dari server, data dari client tidak valid, dll
 *  - Server biasanya akan mengirimkan HTTP Status Code yang sesuai dengan jenis response nya
 *  - Untuk mengetahui status response dari Server, kita bisa menggunakan property Status  
 *  - https://developer.mozilla.org/en-US/docs/WEB/API/XMLHttpRequest/status
 * 
 * State AJAX
 *  - AJAX memiliki tahapan state, dimana kita bisa mendapatkan banyak sekali state di AJAX menggunakan property readyState
 *  - Property readyState mengembalikan nilai number, dimana tiap number merupakan representasi dari statenya
 * 
 * Daftar State (value => state => description)
 *    0 => UNSENT           => Client has been created. open() not called yet.
 *    1 => OPENED           => open() has been called.
 *    2 => HEADER_RECEIVED  => send() has been called, and headers and status are available.
 *    3 => LOADING          => Downloading; responseText holds partial data.
 *    4 => DONE             => The operation is complete
 * 
 * 
 */