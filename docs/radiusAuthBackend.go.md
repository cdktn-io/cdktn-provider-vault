# `radiusAuthBackend` Submodule <a name="`radiusAuthBackend` Submodule" id="@cdktn/provider-vault.radiusAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackend <a name="RadiusAuthBackend" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend vault_radius_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

radiusauthbackend.NewRadiusAuthBackend(scope Construct, id *string, config RadiusAuthBackendConfig) RadiusAuthBackend
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig">RadiusAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout">ResetDialTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort">ResetNasPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout">ResetReadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies">ResetUnregisteredUserPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetAliasMetadata"></a>

```go
func ResetAliasMetadata()
```

##### `ResetDialTimeout` <a name="ResetDialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetDialTimeout"></a>

```go
func ResetDialTimeout()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNasPort` <a name="ResetNasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetNasPort"></a>

```go
func ResetNasPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetPort"></a>

```go
func ResetPort()
```

##### `ResetReadTimeout` <a name="ResetReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetReadTimeout"></a>

```go
func ResetReadTimeout()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenBoundCidrs"></a>

```go
func ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenExplicitMaxTtl"></a>

```go
func ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenMaxTtl"></a>

```go
func ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNoDefaultPolicy"></a>

```go
func ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenNumUses"></a>

```go
func ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPeriod"></a>

```go
func ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenPolicies"></a>

```go
func ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetTokenType"></a>

```go
func ResetTokenType()
```

##### `ResetUnregisteredUserPolicies` <a name="ResetUnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.resetUnregisteredUserPolicies"></a>

```go
func ResetUnregisteredUserPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

radiusauthbackend.RadiusAuthBackend_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

radiusauthbackend.RadiusAuthBackend_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

radiusauthbackend.RadiusAuthBackend_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

radiusauthbackend.RadiusAuthBackend_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RadiusAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RadiusAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RadiusAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier">NasIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput">DialTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput">NasPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput">ReadTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput">SecretWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput">SecretWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput">TokenTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput">UnregisteredUserPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout">DialTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort">NasPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout">ReadTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo">SecretWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion">SecretWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType">TokenType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies">UnregisteredUserPolicies</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NasIdentifier`<sup>Required</sup> <a name="NasIdentifier" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasIdentifier"></a>

```go
func NasIdentifier() *string
```

- *Type:* *string

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadataInput"></a>

```go
func AliasMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DialTimeoutInput`<sup>Optional</sup> <a name="DialTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeoutInput"></a>

```go
func DialTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NasPortInput`<sup>Optional</sup> <a name="NasPortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPortInput"></a>

```go
func NasPortInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ReadTimeoutInput`<sup>Optional</sup> <a name="ReadTimeoutInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeoutInput"></a>

```go
func ReadTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SecretWoInput`<sup>Optional</sup> <a name="SecretWoInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoInput"></a>

```go
func SecretWoInput() *string
```

- *Type:* *string

---

##### `SecretWoVersionInput`<sup>Optional</sup> <a name="SecretWoVersionInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersionInput"></a>

```go
func SecretWoVersionInput() *f64
```

- *Type:* *f64

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrsInput"></a>

```go
func TokenBoundCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```go
func TokenExplicitMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtlInput"></a>

```go
func TokenMaxTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```go
func TokenNoDefaultPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUsesInput"></a>

```go
func TokenNumUsesInput() *f64
```

- *Type:* *f64

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriodInput"></a>

```go
func TokenPeriodInput() *f64
```

- *Type:* *f64

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPoliciesInput"></a>

```go
func TokenPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *f64
```

- *Type:* *f64

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTypeInput"></a>

```go
func TokenTypeInput() *string
```

- *Type:* *string

---

##### `UnregisteredUserPoliciesInput`<sup>Optional</sup> <a name="UnregisteredUserPoliciesInput" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPoliciesInput"></a>

```go
func UnregisteredUserPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.aliasMetadata"></a>

```go
func AliasMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DialTimeout`<sup>Required</sup> <a name="DialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.dialTimeout"></a>

```go
func DialTimeout() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NasPort`<sup>Required</sup> <a name="NasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.nasPort"></a>

```go
func NasPort() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ReadTimeout`<sup>Required</sup> <a name="ReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.readTimeout"></a>

```go
func ReadTimeout() *f64
```

- *Type:* *f64

---

##### `SecretWo`<sup>Required</sup> <a name="SecretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWo"></a>

```go
func SecretWo() *string
```

- *Type:* *string

---

##### `SecretWoVersion`<sup>Required</sup> <a name="SecretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.secretWoVersion"></a>

```go
func SecretWoVersion() *f64
```

- *Type:* *f64

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenBoundCidrs"></a>

```go
func TokenBoundCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenExplicitMaxTtl"></a>

```go
func TokenExplicitMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenMaxTtl"></a>

```go
func TokenMaxTtl() *f64
```

- *Type:* *f64

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNoDefaultPolicy"></a>

```go
func TokenNoDefaultPolicy() interface{}
```

- *Type:* interface{}

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenNumUses"></a>

```go
func TokenNumUses() *f64
```

- *Type:* *f64

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPeriod"></a>

```go
func TokenPeriod() *f64
```

- *Type:* *f64

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenPolicies"></a>

```go
func TokenPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenTtl"></a>

```go
func TokenTtl() *f64
```

- *Type:* *f64

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tokenType"></a>

```go
func TokenType() *string
```

- *Type:* *string

---

##### `UnregisteredUserPolicies`<sup>Required</sup> <a name="UnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.unregisteredUserPolicies"></a>

```go
func UnregisteredUserPolicies() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackend.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendConfig <a name="RadiusAuthBackendConfig" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/radiusauthbackend"

&radiusauthbackend.RadiusAuthBackendConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
	Mount: *string,
	SecretWo: *string,
	SecretWoVersion: *f64,
	AliasMetadata: *map[string]*string,
	DialTimeout: *f64,
	Namespace: *string,
	NasPort: *f64,
	Port: *f64,
	ReadTimeout: *f64,
	TokenBoundCidrs: *[]*string,
	TokenExplicitMaxTtl: *f64,
	TokenMaxTtl: *f64,
	TokenNoDefaultPolicy: interface{},
	TokenNumUses: *f64,
	TokenPeriod: *f64,
	TokenPolicies: *[]*string,
	TokenTtl: *f64,
	TokenType: *string,
	UnregisteredUserPolicies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host">Host</a></code> | <code>*string</code> | The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | Path of the enabled RADIUS auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo">SecretWo</a></code> | <code>*string</code> | The RADIUS shared secret. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion">SecretWoVersion</a></code> | <code>*f64</code> | Version counter for the write-only `secret_wo` field. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>*map[string]*string</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout">DialTimeout</a></code> | <code>*f64</code> | Number of seconds to wait for a backend connection before timing out. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort">NasPort</a></code> | <code>*f64</code> | The NAS-Port attribute of the RADIUS request. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port">Port</a></code> | <code>*f64</code> | The UDP port where the RADIUS server is listening on. Defaults to `1812`. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout">ReadTimeout</a></code> | <code>*f64</code> | Number of seconds to wait for a response from the RADIUS server. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>*[]*string</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>*f64</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>*f64</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>interface{}</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>*f64</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>*f64</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>*[]*string</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl">TokenTtl</a></code> | <code>*f64</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType">TokenType</a></code> | <code>*string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies">UnregisteredUserPolicies</a></code> | <code>*[]*string</code> | A set of policies to be granted to unregistered users. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The RADIUS server to connect to. Examples: `radius.myorg.com`, `127.0.0.1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#host RadiusAuthBackend#host}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path of the enabled RADIUS auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#mount RadiusAuthBackend#mount}

---

##### `SecretWo`<sup>Required</sup> <a name="SecretWo" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWo"></a>

```go
SecretWo *string
```

- *Type:* *string

The RADIUS shared secret. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo RadiusAuthBackend#secret_wo}

---

##### `SecretWoVersion`<sup>Required</sup> <a name="SecretWoVersion" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.secretWoVersion"></a>

```go
SecretWoVersion *f64
```

- *Type:* *f64

Version counter for the write-only `secret_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the secret changes. Increment this value whenever you update `secret_wo` so Terraform detects the change and applies an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#secret_wo_version RadiusAuthBackend#secret_wo_version}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.aliasMetadata"></a>

```go
AliasMetadata *map[string]*string
```

- *Type:* *map[string]*string

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#alias_metadata RadiusAuthBackend#alias_metadata}

---

##### `DialTimeout`<sup>Optional</sup> <a name="DialTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.dialTimeout"></a>

```go
DialTimeout *f64
```

- *Type:* *f64

Number of seconds to wait for a backend connection before timing out.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#dial_timeout RadiusAuthBackend#dial_timeout}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#namespace RadiusAuthBackend#namespace}

---

##### `NasPort`<sup>Optional</sup> <a name="NasPort" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.nasPort"></a>

```go
NasPort *f64
```

- *Type:* *f64

The NAS-Port attribute of the RADIUS request.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#nas_port RadiusAuthBackend#nas_port}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The UDP port where the RADIUS server is listening on. Defaults to `1812`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#port RadiusAuthBackend#port}

---

##### `ReadTimeout`<sup>Optional</sup> <a name="ReadTimeout" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.readTimeout"></a>

```go
ReadTimeout *f64
```

- *Type:* *f64

Number of seconds to wait for a response from the RADIUS server.

Defaults to `10`. If removed from configuration after being set, Vault retains the previously stored value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#read_timeout RadiusAuthBackend#read_timeout}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenBoundCidrs"></a>

```go
TokenBoundCidrs *[]*string
```

- *Type:* *[]*string

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_bound_cidrs RadiusAuthBackend#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```go
TokenExplicitMaxTtl *f64
```

- *Type:* *f64

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_explicit_max_ttl RadiusAuthBackend#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenMaxTtl"></a>

```go
TokenMaxTtl *f64
```

- *Type:* *f64

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_max_ttl RadiusAuthBackend#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```go
TokenNoDefaultPolicy interface{}
```

- *Type:* interface{}

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_no_default_policy RadiusAuthBackend#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenNumUses"></a>

```go
TokenNumUses *f64
```

- *Type:* *f64

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_num_uses RadiusAuthBackend#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPeriod"></a>

```go
TokenPeriod *f64
```

- *Type:* *f64

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_period RadiusAuthBackend#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenPolicies"></a>

```go
TokenPolicies *[]*string
```

- *Type:* *[]*string

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_policies RadiusAuthBackend#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenTtl"></a>

```go
TokenTtl *f64
```

- *Type:* *f64

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_ttl RadiusAuthBackend#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.tokenType"></a>

```go
TokenType *string
```

- *Type:* *string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#token_type RadiusAuthBackend#token_type}

---

##### `UnregisteredUserPolicies`<sup>Optional</sup> <a name="UnregisteredUserPolicies" id="@cdktn/provider-vault.radiusAuthBackend.RadiusAuthBackendConfig.property.unregisteredUserPolicies"></a>

```go
UnregisteredUserPolicies *[]*string
```

- *Type:* *[]*string

A set of policies to be granted to unregistered users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/radius_auth_backend#unregistered_user_policies RadiusAuthBackend#unregistered_user_policies}

---



