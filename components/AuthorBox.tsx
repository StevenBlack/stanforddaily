import React from "react";
import { View, Text, Image } from "react-native";
import { Author } from "helpers/wpapi";
import { FONTS, COLORS, STANFORD_COLORS } from "helpers/constants";
import { AuthorView } from "./pages/HomePage/AuthorView";

interface AuthorBoxProps {
  author: Author;
  linkToAuthor?: boolean;
}

const AuthorBox: React.ElementType<AuthorBoxProps> = ({
  author,
  linkToAuthor = true,
}: AuthorBoxProps) => {
  const { displayName, description, avatarUrl } = author;
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        paddingVertical: 40,
        borderRadius: 5,
        backgroundColor: STANFORD_COLORS.LIGHT_SANDSTONE,
        marginBottom: 10,
      }}
    >
      <View>
        <Image
          source={{
            uri: avatarUrl,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <AuthorView
          authors={[author]}
          style={{
            ...FONTS.ARTICLE_TITLE,
            fontSize: 24,
            textTransform: "none",
          }}
          aStyle={{
            ...(linkToAuthor ? { color: COLORS.LINK.DEFAULT } : {}),
          }}
          linkToAuthor={linkToAuthor}
        />
        {description ? (
          <Text
            style={{
              ...FONTS.CONTENT,
              marginTop: 10,
              fontSize: 18,
              lineHeight: "1.5em",
            }}
          >
            {description}
          </Text>
        ) : (
          undefined
        )}
      </View>
    </View>
  );
};

export default AuthorBox;
