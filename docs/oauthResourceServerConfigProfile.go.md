# `oauthResourceServerConfigProfile` Submodule <a name="`oauthResourceServerConfigProfile` Submodule" id="@cdktn/provider-vault.oauthResourceServerConfigProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthResourceServerConfigProfile <a name="OauthResourceServerConfigProfile" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile vault_oauth_resource_server_config_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.NewOauthResourceServerConfigProfile(scope Construct, id *string, config OauthResourceServerConfigProfileConfig) OauthResourceServerConfigProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig">OauthResourceServerConfigProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys">PutPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem">ResetJwksCaPem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType">ResetJwtType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails">ResetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys">ResetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms">ResetSupportedAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks">ResetUseJwks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim">ResetUserClaim</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicKeys` <a name="PutPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys"></a>

```go
func PutPublicKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.putPublicKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetAudiences"></a>

```go
func ResetAudiences()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetClockSkewLeeway"></a>

```go
func ResetClockSkewLeeway()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetJwksCaPem` <a name="ResetJwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksCaPem"></a>

```go
func ResetJwksCaPem()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwksUri"></a>

```go
func ResetJwksUri()
```

##### `ResetJwtType` <a name="ResetJwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetJwtType"></a>

```go
func ResetJwtType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetNoDefaultPolicy"></a>

```go
func ResetNoDefaultPolicy()
```

##### `ResetOptionalAuthorizationDetails` <a name="ResetOptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetOptionalAuthorizationDetails"></a>

```go
func ResetOptionalAuthorizationDetails()
```

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetPublicKeys"></a>

```go
func ResetPublicKeys()
```

##### `ResetSupportedAlgorithms` <a name="ResetSupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetSupportedAlgorithms"></a>

```go
func ResetSupportedAlgorithms()
```

##### `ResetUseJwks` <a name="ResetUseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUseJwks"></a>

```go
func ResetUseJwks()
```

##### `ResetUserClaim` <a name="ResetUserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.resetUserClaim"></a>

```go
func ResetUserClaim()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.OauthResourceServerConfigProfile_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.OauthResourceServerConfigProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.OauthResourceServerConfigProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.OauthResourceServerConfigProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OauthResourceServerConfigProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OauthResourceServerConfigProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OauthResourceServerConfigProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OauthResourceServerConfigProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys">PublicKeys</a></code> | <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput">AudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput">IssuerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput">JwksCaPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput">JwtTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput">OptionalAuthorizationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput">PublicKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput">SupportedAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput">UseJwksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput">UserClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences">Audiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId">IssuerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem">JwksCaPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType">JwtType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms">SupportedAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks">UseJwks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim">UserClaim</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeys"></a>

```go
func PublicKeys() OauthResourceServerConfigProfilePublicKeysList
```

- *Type:* <a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList">OauthResourceServerConfigProfilePublicKeysList</a>

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiencesInput"></a>

```go
func AudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeewayInput"></a>

```go
func ClockSkewLeewayInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerIdInput`<sup>Optional</sup> <a name="IssuerIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerIdInput"></a>

```go
func IssuerIdInput() *string
```

- *Type:* *string

---

##### `JwksCaPemInput`<sup>Optional</sup> <a name="JwksCaPemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPemInput"></a>

```go
func JwksCaPemInput() *string
```

- *Type:* *string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `JwtTypeInput`<sup>Optional</sup> <a name="JwtTypeInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtTypeInput"></a>

```go
func JwtTypeInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicyInput"></a>

```go
func NoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `OptionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="OptionalAuthorizationDetailsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetailsInput"></a>

```go
func OptionalAuthorizationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.publicKeysInput"></a>

```go
func PublicKeysInput() interface{}
```

- *Type:* interface{}

---

##### `SupportedAlgorithmsInput`<sup>Optional</sup> <a name="SupportedAlgorithmsInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithmsInput"></a>

```go
func SupportedAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UseJwksInput`<sup>Optional</sup> <a name="UseJwksInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwksInput"></a>

```go
func UseJwksInput() interface{}
```

- *Type:* interface{}

---

##### `UserClaimInput`<sup>Optional</sup> <a name="UserClaimInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaimInput"></a>

```go
func UserClaimInput() *string
```

- *Type:* *string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.audiences"></a>

```go
func Audiences() *[]*string
```

- *Type:* *[]*string

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.clockSkewLeeway"></a>

```go
func ClockSkewLeeway() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.issuerId"></a>

```go
func IssuerId() *string
```

- *Type:* *string

---

##### `JwksCaPem`<sup>Required</sup> <a name="JwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksCaPem"></a>

```go
func JwksCaPem() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `JwtType`<sup>Required</sup> <a name="JwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.jwtType"></a>

```go
func JwtType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.noDefaultPolicy"></a>

```go
func NoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `OptionalAuthorizationDetails`<sup>Required</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.optionalAuthorizationDetails"></a>

```go
func OptionalAuthorizationDetails() interface{}
```

- *Type:* interface{}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SupportedAlgorithms`<sup>Required</sup> <a name="SupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.supportedAlgorithms"></a>

```go
func SupportedAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `UseJwks`<sup>Required</sup> <a name="UseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.useJwks"></a>

```go
func UseJwks() interface{}
```

- *Type:* interface{}

---

##### `UserClaim`<sup>Required</sup> <a name="UserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.userClaim"></a>

```go
func UserClaim() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthResourceServerConfigProfileConfig <a name="OauthResourceServerConfigProfileConfig" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

&oauthresourceserverconfigprofile.OauthResourceServerConfigProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IssuerId: *string,
	ProfileName: *string,
	Audiences: *[]*string,
	ClockSkewLeeway: *f64,
	Enabled: interface{},
	JwksCaPem: *string,
	JwksUri: *string,
	JwtType: *string,
	Namespace: *string,
	NoDefaultPolicy: interface{},
	OptionalAuthorizationDetails: interface{},
	PublicKeys: interface{},
	SupportedAlgorithms: *[]*string,
	UseJwks: interface{},
	UserClaim: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId">IssuerId</a></code> | <code>*string</code> | The issuer ID (iss claim) to validate against in incoming JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences">Audiences</a></code> | <code>*[]*string</code> | List of allowed audiences (aud claim) to validate in JWTs. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>*f64</code> | Leeway for clock skew in seconds when validating time-based claims. Defaults to 0. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem">JwksCaPem</a></code> | <code>*string</code> | Optional CA certificate (PEM format) for JWKS URI TLS validation. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri">JwksUri</a></code> | <code>*string</code> | The JWKS URI to fetch public keys from. Required when use_jwks=true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType">JwtType</a></code> | <code>*string</code> | The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails">OptionalAuthorizationDetails</a></code> | <code>interface{}</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys">PublicKeys</a></code> | <code>interface{}</code> | public_keys block. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms">SupportedAlgorithms</a></code> | <code>*[]*string</code> | List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks">UseJwks</a></code> | <code>interface{}</code> | If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim">UserClaim</a></code> | <code>*string</code> | The claim to use as the user identifier. Defaults to 'sub'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IssuerId`<sup>Required</sup> <a name="IssuerId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.issuerId"></a>

```go
IssuerId *string
```

- *Type:* *string

The issuer ID (iss claim) to validate against in incoming JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#issuer_id OauthResourceServerConfigProfile#issuer_id}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

The name of the OAuth Resource Server Configuration profile. Must be unique within the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#profile_name OauthResourceServerConfigProfile#profile_name}

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.audiences"></a>

```go
Audiences *[]*string
```

- *Type:* *[]*string

List of allowed audiences (aud claim) to validate in JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#audiences OauthResourceServerConfigProfile#audiences}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.clockSkewLeeway"></a>

```go
ClockSkewLeeway *f64
```

- *Type:* *f64

Leeway for clock skew in seconds when validating time-based claims. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#clock_skew_leeway OauthResourceServerConfigProfile#clock_skew_leeway}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether this profile is enabled for JWT validation. Disabled profiles are ignored. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#enabled OauthResourceServerConfigProfile#enabled}

---

##### `JwksCaPem`<sup>Optional</sup> <a name="JwksCaPem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksCaPem"></a>

```go
JwksCaPem *string
```

- *Type:* *string

Optional CA certificate (PEM format) for JWKS URI TLS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_ca_pem OauthResourceServerConfigProfile#jwks_ca_pem}

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

The JWKS URI to fetch public keys from. Required when use_jwks=true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwks_uri OauthResourceServerConfigProfile#jwks_uri}

---

##### `JwtType`<sup>Optional</sup> <a name="JwtType" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.jwtType"></a>

```go
JwtType *string
```

- *Type:* *string

The JWT type: 'access_token' or 'transaction_token'. Defaults to 'access_token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#jwt_type OauthResourceServerConfigProfile#jwt_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#namespace OauthResourceServerConfigProfile#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.noDefaultPolicy"></a>

```go
NoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, JWT-authenticated tokens omit the default policy unless added elsewhere. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#no_default_policy OauthResourceServerConfigProfile#no_default_policy}

---

##### `OptionalAuthorizationDetails`<sup>Optional</sup> <a name="OptionalAuthorizationDetails" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.optionalAuthorizationDetails"></a>

```go
OptionalAuthorizationDetails interface{}
```

- *Type:* interface{}

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#optional_authorization_details OauthResourceServerConfigProfile#optional_authorization_details}

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.publicKeys"></a>

```go
PublicKeys interface{}
```

- *Type:* interface{}

public_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#public_keys OauthResourceServerConfigProfile#public_keys}

---

##### `SupportedAlgorithms`<sup>Optional</sup> <a name="SupportedAlgorithms" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.supportedAlgorithms"></a>

```go
SupportedAlgorithms *[]*string
```

- *Type:* *[]*string

List of supported signing algorithms (e.g., RS256, ES256). Defaults to all supported algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#supported_algorithms OauthResourceServerConfigProfile#supported_algorithms}

---

##### `UseJwks`<sup>Optional</sup> <a name="UseJwks" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.useJwks"></a>

```go
UseJwks interface{}
```

- *Type:* interface{}

If true, use JWKS URI for key validation; if false, use static public keys. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#use_jwks OauthResourceServerConfigProfile#use_jwks}

---

##### `UserClaim`<sup>Optional</sup> <a name="UserClaim" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfileConfig.property.userClaim"></a>

```go
UserClaim *string
```

- *Type:* *string

The claim to use as the user identifier. Defaults to 'sub'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#user_claim OauthResourceServerConfigProfile#user_claim}

---

### OauthResourceServerConfigProfilePublicKeys <a name="OauthResourceServerConfigProfilePublicKeys" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

&oauthresourceserverconfigprofile.OauthResourceServerConfigProfilePublicKeys {
	KeyId: *string,
	Pem: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId">KeyId</a></code> | <code>*string</code> | The key ID (kid) for this public key. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem">Pem</a></code> | <code>*string</code> | The PEM-encoded public key. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

The key ID (kid) for this public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#key_id OauthResourceServerConfigProfile#key_id}

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeys.property.pem"></a>

```go
Pem *string
```

- *Type:* *string

The PEM-encoded public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/oauth_resource_server_config_profile#pem OauthResourceServerConfigProfile#pem}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthResourceServerConfigProfilePublicKeysList <a name="OauthResourceServerConfigProfilePublicKeysList" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.NewOauthResourceServerConfigProfilePublicKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OauthResourceServerConfigProfilePublicKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get"></a>

```go
func Get(index *f64) OauthResourceServerConfigProfilePublicKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OauthResourceServerConfigProfilePublicKeysOutputReference <a name="OauthResourceServerConfigProfilePublicKeysOutputReference" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/oauthresourceserverconfigprofile"

oauthresourceserverconfigprofile.NewOauthResourceServerConfigProfilePublicKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OauthResourceServerConfigProfilePublicKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput">PemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem">Pem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `PemInput`<sup>Optional</sup> <a name="PemInput" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pemInput"></a>

```go
func PemInput() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.pem"></a>

```go
func Pem() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.oauthResourceServerConfigProfile.OauthResourceServerConfigProfilePublicKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



