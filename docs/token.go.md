# `token` Submodule <a name="`token` Submodule" id="@cdktn/provider-vault.token"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Token <a name="Token" id="@cdktn/provider-vault.token.Token"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.token.Token.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

token.NewToken(scope Construct, id *string, config TokenConfig) Token
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.token.Token.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.token.Token.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.token.TokenConfig">TokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.token.Token.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.token.Token.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.token.TokenConfig">TokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.token.Token.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.token.Token.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.token.Token.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.token.Token.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.token.Token.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.token.Token.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.token.Token.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.token.Token.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.token.Token.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.token.Token.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetExplicitMaxTtl">ResetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetNoParent">ResetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetRenewIncrement">ResetRenewIncrement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetRenewMinLease">ResetRenewMinLease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.token.Token.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.token.Token.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.token.Token.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.token.Token.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.token.Token.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.token.Token.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.token.Token.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.token.Token.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.token.Token.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.token.Token.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.token.Token.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.token.Token.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.token.Token.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.token.Token.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.token.Token.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.token.Token.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.token.Token.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.token.Token.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.token.Token.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.token.Token.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.token.Token.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.token.Token.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.token.Token.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.token.Token.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.token.Token.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.token.Token.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.token.Token.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.token.Token.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.token.Token.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.token.Token.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.token.Token.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.token.Token.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.token.Token.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.token.Token.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.token.Token.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.token.Token.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-vault.token.Token.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExplicitMaxTtl` <a name="ResetExplicitMaxTtl" id="@cdktn/provider-vault.token.Token.resetExplicitMaxTtl"></a>

```go
func ResetExplicitMaxTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.token.Token.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.token.Token.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.token.Token.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktn/provider-vault.token.Token.resetNoDefaultPolicy"></a>

```go
func ResetNoDefaultPolicy()
```

##### `ResetNoParent` <a name="ResetNoParent" id="@cdktn/provider-vault.token.Token.resetNoParent"></a>

```go
func ResetNoParent()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktn/provider-vault.token.Token.resetNumUses"></a>

```go
func ResetNumUses()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-vault.token.Token.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.token.Token.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktn/provider-vault.token.Token.resetRenewable"></a>

```go
func ResetRenewable()
```

##### `ResetRenewIncrement` <a name="ResetRenewIncrement" id="@cdktn/provider-vault.token.Token.resetRenewIncrement"></a>

```go
func ResetRenewIncrement()
```

##### `ResetRenewMinLease` <a name="ResetRenewMinLease" id="@cdktn/provider-vault.token.Token.resetRenewMinLease"></a>

```go
func ResetRenewMinLease()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktn/provider-vault.token.Token.resetRoleName"></a>

```go
func ResetRoleName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.token.Token.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktn/provider-vault.token.Token.resetWrappingTtl"></a>

```go
func ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.token.Token.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.token.Token.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Token resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.token.Token.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

token.Token_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.token.Token.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.token.Token.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

token.Token_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.token.Token.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.token.Token.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

token.Token_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.token.Token.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.token.Token.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

token.Token_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Token resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.token.Token.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.token.Token.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Token to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.token.Token.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Token that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.token.Token.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Token to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.token.Token.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.token.Token.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.leaseDuration">LeaseDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.leaseStarted">LeaseStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.wrappedToken">WrappedToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.wrappingAccessor">WrappingAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.explicitMaxTtlInput">ExplicitMaxTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.noParentInput">NoParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.numUsesInput">NumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewableInput">RenewableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewIncrementInput">RenewIncrementInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewMinLeaseInput">RenewMinLeaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.noParent">NoParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.numUses">NumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewable">Renewable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewIncrement">RenewIncrement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.renewMinLease">RenewMinLease</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.Token.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.token.Token.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.token.Token.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.token.Token.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.token.Token.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.token.Token.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.token.Token.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.token.Token.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.token.Token.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.token.Token.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.token.Token.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.token.Token.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.token.Token.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.token.Token.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.token.Token.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.token.Token.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.token.Token.property.leaseDuration"></a>

```go
func LeaseDuration() *f64
```

- *Type:* *f64

---

##### `LeaseStarted`<sup>Required</sup> <a name="LeaseStarted" id="@cdktn/provider-vault.token.Token.property.leaseStarted"></a>

```go
func LeaseStarted() *string
```

- *Type:* *string

---

##### `WrappedToken`<sup>Required</sup> <a name="WrappedToken" id="@cdktn/provider-vault.token.Token.property.wrappedToken"></a>

```go
func WrappedToken() *string
```

- *Type:* *string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktn/provider-vault.token.Token.property.wrappingAccessor"></a>

```go
func WrappingAccessor() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-vault.token.Token.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExplicitMaxTtlInput`<sup>Optional</sup> <a name="ExplicitMaxTtlInput" id="@cdktn/provider-vault.token.Token.property.explicitMaxTtlInput"></a>

```go
func ExplicitMaxTtlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.token.Token.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.token.Token.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.token.Token.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktn/provider-vault.token.Token.property.noDefaultPolicyInput"></a>

```go
func NoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `NoParentInput`<sup>Optional</sup> <a name="NoParentInput" id="@cdktn/provider-vault.token.Token.property.noParentInput"></a>

```go
func NoParentInput() interface{}
```

- *Type:* interface{}

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktn/provider-vault.token.Token.property.numUsesInput"></a>

```go
func NumUsesInput() *f64
```

- *Type:* *f64

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-vault.token.Token.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.token.Token.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktn/provider-vault.token.Token.property.renewableInput"></a>

```go
func RenewableInput() interface{}
```

- *Type:* interface{}

---

##### `RenewIncrementInput`<sup>Optional</sup> <a name="RenewIncrementInput" id="@cdktn/provider-vault.token.Token.property.renewIncrementInput"></a>

```go
func RenewIncrementInput() *f64
```

- *Type:* *f64

---

##### `RenewMinLeaseInput`<sup>Optional</sup> <a name="RenewMinLeaseInput" id="@cdktn/provider-vault.token.Token.property.renewMinLeaseInput"></a>

```go
func RenewMinLeaseInput() *f64
```

- *Type:* *f64

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.token.Token.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.token.Token.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktn/provider-vault.token.Token.property.wrappingTtlInput"></a>

```go
func WrappingTtlInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-vault.token.Token.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExplicitMaxTtl`<sup>Required</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.token.Token.property.explicitMaxTtl"></a>

```go
func ExplicitMaxTtl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.token.Token.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.token.Token.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.token.Token.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.token.Token.property.noDefaultPolicy"></a>

```go
func NoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `NoParent`<sup>Required</sup> <a name="NoParent" id="@cdktn/provider-vault.token.Token.property.noParent"></a>

```go
func NoParent() interface{}
```

- *Type:* interface{}

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktn/provider-vault.token.Token.property.numUses"></a>

```go
func NumUses() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-vault.token.Token.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.token.Token.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.token.Token.property.renewable"></a>

```go
func Renewable() interface{}
```

- *Type:* interface{}

---

##### `RenewIncrement`<sup>Required</sup> <a name="RenewIncrement" id="@cdktn/provider-vault.token.Token.property.renewIncrement"></a>

```go
func RenewIncrement() *f64
```

- *Type:* *f64

---

##### `RenewMinLease`<sup>Required</sup> <a name="RenewMinLease" id="@cdktn/provider-vault.token.Token.property.renewMinLease"></a>

```go
func RenewMinLease() *f64
```

- *Type:* *f64

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.token.Token.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.token.Token.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.token.Token.property.wrappingTtl"></a>

```go
func WrappingTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.token.Token.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.token.Token.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenConfig <a name="TokenConfig" id="@cdktn/provider-vault.token.TokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.token.TokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/token"

&token.TokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	ExplicitMaxTtl: *string,
	Id: *string,
	Metadata: *map[string]*string,
	Namespace: *string,
	NoDefaultPolicy: interface{},
	NoParent: interface{},
	NumUses: *f64,
	Period: *string,
	Policies: *[]*string,
	Renewable: interface{},
	RenewIncrement: *f64,
	RenewMinLease: *f64,
	RoleName: *string,
	Ttl: *string,
	WrappingTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>*string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>interface{}</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.noParent">NoParent</a></code> | <code>interface{}</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.numUses">NumUses</a></code> | <code>*f64</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.period">Period</a></code> | <code>*string</code> | The period of the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | List of policies. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.renewable">Renewable</a></code> | <code>interface{}</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.renewIncrement">RenewIncrement</a></code> | <code>*f64</code> | The renew increment. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.renewMinLease">RenewMinLease</a></code> | <code>*f64</code> | The minimum lease to renew token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.roleName">RoleName</a></code> | <code>*string</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.token.TokenConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>*string</code> | The TTL period of the wrapped token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.token.TokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.token.TokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.token.TokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.token.TokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.token.TokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.token.TokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.token.TokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-vault.token.TokenConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#display_name Token#display_name}

---

##### `ExplicitMaxTtl`<sup>Optional</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.token.TokenConfig.property.explicitMaxTtl"></a>

```go
ExplicitMaxTtl *string
```

- *Type:* *string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.token.TokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.token.TokenConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#metadata Token#metadata}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.token.TokenConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#namespace Token#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.token.TokenConfig.property.noDefaultPolicy"></a>

```go
NoDefaultPolicy interface{}
```

- *Type:* interface{}

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `NoParent`<sup>Optional</sup> <a name="NoParent" id="@cdktn/provider-vault.token.TokenConfig.property.noParent"></a>

```go
NoParent interface{}
```

- *Type:* interface{}

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#no_parent Token#no_parent}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktn/provider-vault.token.TokenConfig.property.numUses"></a>

```go
NumUses *f64
```

- *Type:* *f64

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#num_uses Token#num_uses}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-vault.token.TokenConfig.property.period"></a>

```go
Period *string
```

- *Type:* *string

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#period Token#period}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.token.TokenConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#policies Token#policies}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktn/provider-vault.token.TokenConfig.property.renewable"></a>

```go
Renewable interface{}
```

- *Type:* interface{}

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#renewable Token#renewable}

---

##### `RenewIncrement`<sup>Optional</sup> <a name="RenewIncrement" id="@cdktn/provider-vault.token.TokenConfig.property.renewIncrement"></a>

```go
RenewIncrement *f64
```

- *Type:* *f64

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `RenewMinLease`<sup>Optional</sup> <a name="RenewMinLease" id="@cdktn/provider-vault.token.TokenConfig.property.renewMinLease"></a>

```go
RenewMinLease *f64
```

- *Type:* *f64

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktn/provider-vault.token.TokenConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#role_name Token#role_name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.token.TokenConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#ttl Token#ttl}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.token.TokenConfig.property.wrappingTtl"></a>

```go
WrappingTtl *string
```

- *Type:* *string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---



