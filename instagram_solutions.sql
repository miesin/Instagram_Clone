#select username, created_at from users order by created_at limit 5;
 # select date_format(created_at, '%W') as week_day, COUNT(*) as total from users 
 # group by date_format(created_at, '%W') order by count(*) DESC limit 2;
# select username from users left join photos on users.id = photos.user_id where photos.id is null;

            
# select username, image_url, photos.id, count(*) as total_likes 
# from photos join likes on photos.id = likes.photo_id
#             join users on users.id = photos.user_id 
#             group by photos.id order by count(*) desc limit 3;

# select username, users.id as 'users', count(*) as posts from users 
# left join photos on users.id = photos.user_id group by users.id order by posts DESC;
# select (select count(*) from photos)/(select count(*) from users) as avg_posts;
            
            
# select tag_name, tag_id, count(*) as most_popular from photo_tags 
#         join tags on photo_tags.tag_id = tags.id
#         #join photos on photo_tags.tag_id = photos.id 
#         group by tags.id order by count(*) DESC limit 8;
    
select username, count(*) from users 
    join likes on users.id = likes.user_id
    #where count(*)>257.
     group by users.id having count(*)=(select count(*) from photos);
     
select 
CASE
when email like '%yahoo%' then 'Yahoo' 
when email like '%gmail%' then 'gmail'
when email like '%hotmail%' then 'hotmail'
else 'other'
END as provider, count(*) as total_users
from users 
group by provider order by total_users DESC;


