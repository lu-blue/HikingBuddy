package hikingBuddy.Likes;

import org.springframework.stereotype.Service;


@Service
public class PostLikeService {
    PostLikeRepository postLikeRepository;

    public PostLikeService(PostLikeRepository postLikeRepository) {
        this.postLikeRepository = postLikeRepository;
    }

    public PostLike savePostLike (PostLike postLike){ return postLikeRepository.save(postLike); }

    public PostLike updatePostLike(Long id, PostLike postLikeParam){
        postLikeParam.setId(id);
        PostLike postLike = postLikeRepository.save(postLikeParam);
        return postLike;
    }


}
