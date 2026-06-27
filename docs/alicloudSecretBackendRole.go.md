# `alicloudSecretBackendRole` Submodule <a name="`alicloudSecretBackendRole` Submodule" id="@cdktn/provider-vault.alicloudSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackendRole <a name="AlicloudSecretBackendRole" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.NewAlicloudSecretBackendRole(scope Construct, id *string, config AlicloudSecretBackendRoleConfig) AlicloudSecretBackendRole
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies">PutInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies">PutRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies">ResetInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies">ResetRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlinePolicies` <a name="PutInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies"></a>

```go
func PutInlinePolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemotePolicies` <a name="PutRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies"></a>

```go
func PutRemotePolicies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInlinePolicies` <a name="ResetInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies"></a>

```go
func ResetInlinePolicies()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl"></a>

```go
func ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetRemotePolicies` <a name="ResetRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies"></a>

```go
func ResetRemotePolicies()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.AlicloudSecretBackendRole_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.AlicloudSecretBackendRole_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.AlicloudSecretBackendRole_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.AlicloudSecretBackendRole_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlicloudSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlicloudSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies">InlinePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies">RemotePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput">InlinePoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput">RemotePoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InlinePolicies`<sup>Required</sup> <a name="InlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies"></a>

```go
func InlinePolicies() AlicloudSecretBackendRoleInlinePoliciesList
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a>

---

##### `RemotePolicies`<sup>Required</sup> <a name="RemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies"></a>

```go
func RemotePolicies() AlicloudSecretBackendRoleRemotePoliciesList
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a>

---

##### `InlinePoliciesInput`<sup>Optional</sup> <a name="InlinePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput"></a>

```go
func InlinePoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput"></a>

```go
func MaxTtlInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `RemotePoliciesInput`<sup>Optional</sup> <a name="RemotePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput"></a>

```go
func RemotePoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl"></a>

```go
func MaxTtl() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendRoleConfig <a name="AlicloudSecretBackendRoleConfig" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

&alicloudsecretbackendrole.AlicloudSecretBackendRoleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	Name: *string,
	InlinePolicies: interface{},
	MaxTtl: *f64,
	Namespace: *string,
	RemotePolicies: interface{},
	RoleArn: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount">Mount</a></code> | <code>*string</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name">Name</a></code> | <code>*string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies">InlinePolicies</a></code> | <code>interface{}</code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>*f64</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies">RemotePolicies</a></code> | <code>interface{}</code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `InlinePolicies`<sup>Optional</sup> <a name="InlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies"></a>

```go
InlinePolicies interface{}
```

- *Type:* interface{}

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl"></a>

```go
MaxTtl *f64
```

- *Type:* *f64

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `RemotePolicies`<sup>Optional</sup> <a name="RemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies"></a>

```go
RemotePolicies interface{}
```

- *Type:* interface{}

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

### AlicloudSecretBackendRoleInlinePolicies <a name="AlicloudSecretBackendRoleInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

&alicloudsecretbackendrole.AlicloudSecretBackendRoleInlinePolicies {
	PolicyDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | JSON-encoded inline policy document. |

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

JSON-encoded inline policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}

---

### AlicloudSecretBackendRoleRemotePolicies <a name="AlicloudSecretBackendRoleRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

&alicloudsecretbackendrole.AlicloudSecretBackendRoleRemotePolicies {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name">Name</a></code> | <code>*string</code> | Name of the remote policy. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type">Type</a></code> | <code>*string</code> | Type of the remote policy (System or Custom). |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the remote policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the remote policy (System or Custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AlicloudSecretBackendRoleInlinePoliciesList <a name="AlicloudSecretBackendRoleInlinePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.NewAlicloudSecretBackendRoleInlinePoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlicloudSecretBackendRoleInlinePoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get"></a>

```go
func Get(index *f64) AlicloudSecretBackendRoleInlinePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlicloudSecretBackendRoleInlinePoliciesOutputReference <a name="AlicloudSecretBackendRoleInlinePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.NewAlicloudSecretBackendRoleInlinePoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlicloudSecretBackendRoleInlinePoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlicloudSecretBackendRoleRemotePoliciesList <a name="AlicloudSecretBackendRoleRemotePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.NewAlicloudSecretBackendRoleRemotePoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlicloudSecretBackendRoleRemotePoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get"></a>

```go
func Get(index *f64) AlicloudSecretBackendRoleRemotePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlicloudSecretBackendRoleRemotePoliciesOutputReference <a name="AlicloudSecretBackendRoleRemotePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/alicloudsecretbackendrole"

alicloudsecretbackendrole.NewAlicloudSecretBackendRoleRemotePoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlicloudSecretBackendRoleRemotePoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



