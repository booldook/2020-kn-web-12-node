-- Create(INSERT) Read(SELECT) Update(UPDATE) Delete(DELETE)

-- INSERT INTO city SET 
-- name='Incheon',
-- country='Korea',
-- summary='한국의 제3의 도시-수도권에 위치하고 있다.',
-- lat=37.27,
-- lon=126.42,
-- population=2923000,
-- sdate='1300-01-01';

-- DELETE FROM city WHERE id=4;

-- UPDATE city SET 
-- summary='한국의 제2의 도시-도로가 좁다. 동백섬도 좋다.',
-- population=2923012 
-- WHERE id=2;

-- SELECT * FROM city; -- 모든데이터 가져오기(정렬을 해야한다.)

-- 정렬(ORDER)
-- SELECT * FROM city ORDER BY id DESC;-- id로 정렬해서 내림차순으로 가져오기
-- SELECT * FROM city ORDER BY name ASC; -- name로 정렬해서 오름차순으로 가져오기
-- SELECT name, country FROM city ORDER BY name ASC; -- 필요한 필드만 가져올 수 있다.
-- SELECT COUNT(id) FROM city; -- 레코드(데이터)의 갯수 확인

-- 조건절(WHERE)
-- SELECT * FROM city WHERE name='pusan';
-- SELECT id, name, population FROM city WHERE population > 2923000;
-- SELECT id, name, population, lat FROM city WHERE population > 2923000 AND lat > 38;
-- SELECT * FROM city WHERE population > 2923000 ORDER BY name ASC;
-- SELECT * FROM city WHERE summary LIKE '%동백섬%';


-- USE world;
-- SELECT COUNT(*) FROM city;
-- SELECT * FROM city WHERE Name LIKE '%hel%' AND Population > 100000 ORDER BY id ASC; 
-- LIMIT
-- SELECT * FROM city WHERE Population > 200000 ORDER BY Name ASC LIMIT 0, 100;















