/**
 * Lengkapi fungsi double() di bawah ini
 * 
 * Ketentuan.
 * - Fungsi ini menerima 1 parameter berupa array of number
 * - Fungsi ini harus mengembalikan array baru yang merupakan hasil kali dua
 *   dari setiap elemen array yang ada
 * - Fungsi ini tidak boleh mengubah array yang diterima sebagai parameter
 * 
 */

/**
 * Contoh penggunaan:
 *  double([1, 2, 3]) -> [2, 4, 6]
 *  double([2, 4, 6]) -> [4, 8, 12]
 */

function double(numbers) {
    return numbers.map((number) => number * 2)
  
  }
  