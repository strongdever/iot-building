!(function ($) {
    "use strict";
    $(document).ready(function () {
        var imageURL = "";
        $('#profileImage').on('change', function () {
            var file = $(this)[0].files[0];
            if (file) {
                imageURL = URL.createObjectURL(file);

                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#previewContainer').html('<img src="' + e.target.result + '">');
                }

                reader.readAsDataURL(file);
            } else {
                $('#previewContainer').html(''); // Clear the preview container
            }
        });

        $('#uploadButton').on('click', function () {
            var file = $('#profileImage')[0].files[0];
            if (file) {
                // Perform the upload process using AJAX or other methods
                console.log('Upload in progress...');
            } else {
                console.log('No file selected');
            }
        });

        //year, month, date
        //add the years
        const select_year = $(".select-year");
        for (var year = 2000; year < 2051; year++) {
            var option = '<option value="' + year + '">' + year + '年</option>';
            select_year.append(option);
        }

        //add the months
        const select_month = $(".select-month");
        for (var month = 1; month < 13; month++) {
            var option = '<option value="' + month + '">' + month + '月</option>';
            select_month.append(option);
        }

        const currentDate = new Date();
        var selectedYear = currentDate.getFullYear();
        var selectedMonth = currentDate.getMonth() + 1;
        //change event of year
        //カテゴリ start------>
        $(".register-year").change(function () {
            // Code to execute when the selected option changes
            selectedYear = $(this).val();
            selectedMonth = $('.register-month').val();
            if (selectedYear == 0) {
                selectedYear = currentDate.getFullYear();
            }
            if (selectedMonth == 0) {
                selectedMonth = currentDate.getMonth() + 1;
            }
            var select_day = $('.register-day');
            add_days(select_day, selectedYear, selectedMonth);
        });
        //change event of Month
        $(".register-month").change(function () {
            // Code to execute when the selected option changes
            selectedYear = $('.register-year').val();
            selectedMonth = $(this).val();
            if (selectedYear == 0) {
                selectedYear = currentDate.getFullYear();
            }
            if (selectedMonth == 0) {
                selectedMonth = currentDate.getMonth() + 1;
            }
            var select_day = $('.register-day');
            add_days(select_day, selectedYear, selectedMonth);
        });

        $(".register-current-time").click(function () {
            const currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();
            $('#register-year').val(currentYear);
            $('#register-month').val(currentMonth);
            $('#register-day').val(currentDay);
        })
        //カテゴリ end------>

        //締切日 start------>
        $(".deadline-year").change(function () {
            // Code to execute when the selected option changes
            selectedYear = $(this).val();
            selectedMonth = $('.deadline-month').val();
            if (selectedYear == 0) {
                selectedYear = currentDate.getFullYear();
            }
            if (selectedMonth == 0) {
                selectedMonth = currentDate.getMonth() + 1;
            }
            var select_day = $('.deadline-day');
            add_days(select_day, selectedYear, selectedMonth);
        });
        //change event of Month
        $(".deadline-month").change(function () {
            // Code to execute when the selected option changes
            selectedYear = $('.deadline-year').val();
            selectedMonth = $(this).val();
            if (selectedYear == 0) {
                selectedYear = currentDate.getFullYear();
            }
            if (selectedMonth == 0) {
                selectedMonth = currentDate.getMonth() + 1;
            }
            var select_day = $('.deadline-day');
            add_days(select_day, selectedYear, selectedMonth);
        });

        $(".deadline-current-time").click(function () {
            const currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();
            $('#deadline-year').val(currentYear);
            $('#deadline-month').val(currentMonth);
            $('#deadline-day').val(currentDay);
        })
        //締切日 end------>


        var select_Day = $(".select-day");
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1;
        add_days(select_Day, currentYear, currentMonth);

        function add_days(select_day, year, month) {
            select_day.empty();
            select_day.append('<option value="0">-- 日</option>');

            var endDay = get_endday(year, month);
            for (var day = 1; day < endDay + 1; day++) {
                var option = '<option value="' + day + '">' + day + '日</option>';
                select_day.append(option);
            }
        }

        function get_endday(year, month) {
            var endday = new Date(year, month, 0).getDate();
            return endday;
        }
    });

})(jQuery);