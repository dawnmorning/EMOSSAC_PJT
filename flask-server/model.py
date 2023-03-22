# coding: utf-8
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()



class BestBook30model(db.Model):
    __tablename__ = 'best_book30model'

    best_no = db.Column(db.Integer, primary_key=True)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)

    book = db.relationship('Book', primaryjoin='BestBook30model.book_no == Book.book_no', backref='best_book30models')



class Book(db.Model):
    __tablename__ = 'book'

    book_no = db.Column(db.BigInteger, primary_key=True)
    score = db.Column(db.Float(asdecimal=True), server_default=db.FetchedValue())
    day = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    grade = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    hit = db.Column(db.Integer, server_default=db.FetchedValue())
    href = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    plat_cd = db.Column(db.Integer)
    regist = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    series = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    story = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    thumbnail = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    title = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    type_cd = db.Column(db.Integer)
    views = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    genre_cd = db.Column(db.ForeignKey('gerne1.genre_cd'), db.ForeignKey('genre.genre_cd'), index=True)
    author = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    tag = db.Column(db.Text(collation='utf8mb4_unicode_ci'))

    genre = db.relationship('Genre', primaryjoin='Book.genre_cd == Genre.genre_cd', backref='books')
    gerne1 = db.relationship('Gerne1', primaryjoin='Book.genre_cd == Gerne1.genre_cd', backref='books')



class BookComment(db.Model):
    __tablename__ = 'book_comment'

    detail_comment_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    content = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    depth = db.Column(db.Integer)
    is_delete = db.Column(db.BIT(1))
    book_id = db.Column(db.ForeignKey('book.book_no'), index=True)
    parent_id = db.Column(db.ForeignKey('book_comment.detail_comment_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)
    like_score = db.Column(db.Float(asdecimal=True))

    book = db.relationship('Book', primaryjoin='BookComment.book_id == Book.book_no', backref='book_comments')
    parent = db.relationship('BookComment', remote_side=[detail_comment_no], primaryjoin='BookComment.parent_id == BookComment.detail_comment_no', backref='book_comments')
    user = db.relationship('User', primaryjoin='BookComment.user_no == User.user_id', backref='book_comments')



class BookCommentLike(db.Model):
    __tablename__ = 'book_comment_like'

    comment_like_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    like_status = db.Column(db.BIT(1))
    book_comment_no = db.Column(db.ForeignKey('book_comment.detail_comment_no'), nullable=False, index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    book_comment = db.relationship('BookComment', primaryjoin='BookCommentLike.book_comment_no == BookComment.detail_comment_no', backref='book_comment_likes')
    user = db.relationship('User', primaryjoin='BookCommentLike.user_no == User.user_id', backref='book_comment_likes')



class BookMark(db.Model):
    __tablename__ = 'book_mark'

    bookmark_id = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.BIT(1))
    book_no = db.Column(db.ForeignKey('book.book_no'), nullable=False, index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    book = db.relationship('Book', primaryjoin='BookMark.book_no == Book.book_no', backref='book_marks')
    user = db.relationship('User', primaryjoin='BookMark.user_no == User.user_id', backref='book_marks')



class DayNovel(db.Model):
    __tablename__ = 'day_novel'

    day_novel_cd = db.Column(db.BigInteger, primary_key=True)
    book_no_list = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    day_name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class DayToon(db.Model):
    __tablename__ = 'day_toon'

    day_toon_cd = db.Column(db.BigInteger, primary_key=True)
    book_no_list = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    day_name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class EmoCommentLike(db.Model):
    __tablename__ = 'emo_comment_like'

    comment_like_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    like_status = db.Column(db.BIT(1))
    emo_comment_no = db.Column(db.ForeignKey('emopick_comment.emo_comment_no'), nullable=False, index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    emopick_comment = db.relationship('EmopickComment', primaryjoin='EmoCommentLike.emo_comment_no == EmopickComment.emo_comment_no', backref='emo_comment_likes')
    user = db.relationship('User', primaryjoin='EmoCommentLike.user_no == User.user_id', backref='emo_comment_likes')



class Emopick(db.Model):
    __tablename__ = 'emopick'

    emopick_no = db.Column(db.BigInteger, primary_key=True)
    title = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    content = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    contents_list = db.Column(db.JSON)
    webtoon_seq = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    novel_seq = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    book_seq = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)

    user = db.relationship('User', primaryjoin='Emopick.user_no == User.user_id', backref='emopicks')



class EmopickComment(db.Model):
    __tablename__ = 'emopick_comment'

    emo_comment_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    content = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    depth = db.Column(db.Integer)
    is_delete = db.Column(db.BIT(1))
    emopick_no = db.Column(db.ForeignKey('emopick.emopick_no'), index=True)
    parent_id = db.Column(db.ForeignKey('emopick_comment.emo_comment_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    emopick = db.relationship('Emopick', primaryjoin='EmopickComment.emopick_no == Emopick.emopick_no', backref='emopick_comments')
    parent = db.relationship('EmopickComment', remote_side=[emo_comment_no], primaryjoin='EmopickComment.parent_id == EmopickComment.emo_comment_no', backref='emopick_comments')
    user = db.relationship('User', primaryjoin='EmopickComment.user_no == User.user_id', backref='emopick_comments')



class Genre(db.Model):
    __tablename__ = 'genre'

    genre_cd = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class Gerne1(db.Model):
    __tablename__ = 'gerne1'

    genre_cd = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class Hit(db.Model):
    __tablename__ = 'hit'

    hit_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    book = db.relationship('Book', primaryjoin='Hit.book_no == Book.book_no', backref='hits')
    user = db.relationship('User', primaryjoin='Hit.user_no == User.user_id', backref='hits')



class ItemBasedcfmodel(db.Model):
    __tablename__ = 'item_basedcfmodel'

    item_no = db.Column(db.Integer, primary_key=True)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)

    book = db.relationship('Book', primaryjoin='ItemBasedcfmodel.book_no == Book.book_no', backref='item_basedcfmodels')



class LikeEmo(db.Model):
    __tablename__ = 'like_emo'

    like_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    emopick_no = db.Column(db.ForeignKey('emopick.emopick_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    emopick = db.relationship('Emopick', primaryjoin='LikeEmo.emopick_no == Emopick.emopick_no', backref='like_emoes')
    user = db.relationship('User', primaryjoin='LikeEmo.user_no == User.user_id', backref='like_emoes')



class ReadBook(db.Model):
    __tablename__ = 'read_book'

    read_no = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    book = db.relationship('Book', primaryjoin='ReadBook.book_no == Book.book_no', backref='read_books')
    user = db.relationship('User', primaryjoin='ReadBook.user_no == User.user_id', backref='read_books')



class Research(db.Model):
    __tablename__ = 'research'

    research_no = db.Column(db.BigInteger, primary_key=True)
    book_id = db.Column(db.BigInteger)
    gerne_id = db.Column(db.BigInteger)
    type = db.Column(db.BigInteger)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)

    book = db.relationship('Book', primaryjoin='Research.book_no == Book.book_no', backref='researches')



class Score(db.Model):
    __tablename__ = 'score'

    score_no = db.Column(db.BigInteger, primary_key=True)
    score = db.Column(db.Float(asdecimal=True))
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)

    book = db.relationship('Book', primaryjoin='Score.book_no == Book.book_no', backref='scores')
    user = db.relationship('User', primaryjoin='Score.user_no == User.user_id', backref='scores')



class TagNovel(db.Model):
    __tablename__ = 'tag_novel'

    tag_cd = db.Column(db.BigInteger, primary_key=True)
    book_no_list = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    tag_name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class TagToon(db.Model):
    __tablename__ = 'tag_toon'

    tag_cd = db.Column(db.BigInteger, primary_key=True)
    book_no_list = db.Column(db.Text(collation='utf8mb4_unicode_ci'))
    tag_name = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class User(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.BigInteger, primary_key=True)
    created_dt = db.Column(db.DateTime, nullable=False)
    modified_dt = db.Column(db.DateTime, nullable=False)
    email = db.Column(db.String(512, 'utf8mb4_unicode_ci'))
    image_url = db.Column(db.String(512, 'utf8mb4_unicode_ci'))
    nick_name = db.Column(db.String(100, 'utf8mb4_unicode_ci'), unique=True)
    password = db.Column(db.String(128, 'utf8mb4_unicode_ci'))
    provider_type = db.Column(db.String(20, 'utf8mb4_unicode_ci'))
    provider_id = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    user_name = db.Column(db.String(100, 'utf8mb4_unicode_ci'))
    age = db.Column(db.Integer)
    gender = db.Column(db.BIT(1))
    favorite_novel_genre = db.Column(db.String(255, 'utf8mb4_unicode_ci'))
    favorite_webtoon_genre = db.Column(db.String(255, 'utf8mb4_unicode_ci'))



class UserPredictedGradeModel(db.Model):
    __tablename__ = 'user_predicted_grade_model'

    pred_grade_no = db.Column(db.Integer, primary_key=True)
    book_no = db.Column(db.ForeignKey('book.book_no'), index=True)
    user_no = db.Column(db.ForeignKey('user.user_id'), index=True)

    book = db.relationship('Book', primaryjoin='UserPredictedGradeModel.book_no == Book.book_no', backref='user_predicted_grade_models')
    user = db.relationship('User', primaryjoin='UserPredictedGradeModel.user_no == User.user_id', backref='user_predicted_grade_models')



class UserRefreshToken(db.Model):
    __tablename__ = 'user_refresh_token'

    refresh_token_no = db.Column(db.BigInteger, primary_key=True)
    refresh_token = db.Column(db.String(256, 'utf8mb4_unicode_ci'), nullable=False)
    user_id = db.Column(db.String(64, 'utf8mb4_unicode_ci'), nullable=False, unique=True)
