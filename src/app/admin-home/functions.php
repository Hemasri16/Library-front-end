<?php
	

	function get_books_count(){
		$connection = mysqli_connect("localhost","root","");
		$db = mysqli_select_db($connection,"library");
		$book_count = "";
		$query = "select count(*) as books_count from books";
		$query_run = mysqli_query($connection,$query);
		while($row = mysqli_fetch_assoc($query_run)){
			$book_count = $row['books_count'];
		}
		return($books_count);
	}

		
?>