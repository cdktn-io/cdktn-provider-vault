# `osSecretBackendAccount` Submodule <a name="`osSecretBackendAccount` Submodule" id="@cdktn/provider-vault.osSecretBackendAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendAccount <a name="OsSecretBackendAccount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account vault_os_secret_backend_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

ossecretbackendaccount.NewOsSecretBackendAccount(scope Construct, id *string, config OsSecretBackendAccountConfig) OsSecretBackendAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef">ResetParentAccountRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation"></a>

```go
func ResetDisableAutomatedRotation()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetParentAccountRef` <a name="ResetParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef"></a>

```go
func ResetParentAccountRef()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection"></a>

```go
func ResetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

ossecretbackendaccount.OsSecretBackendAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

ossecretbackendaccount.OsSecretBackendAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

ossecretbackendaccount.OsSecretBackendAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

ossecretbackendaccount.OsSecretBackendAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsSecretBackendAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsSecretBackendAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation">LastVaultRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation">NextVaultRotation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput">CustomMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput">ParentAccountRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef">ParentAccountRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LastVaultRotation`<sup>Required</sup> <a name="LastVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation"></a>

```go
func LastVaultRotation() *string
```

- *Type:* *string

---

##### `NextVaultRotation`<sup>Required</sup> <a name="NextVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation"></a>

```go
func NextVaultRotation() *string
```

- *Type:* *string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput"></a>

```go
func CustomMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput"></a>

```go
func DisableAutomatedRotationInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ParentAccountRefInput`<sup>Optional</sup> <a name="ParentAccountRefInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput"></a>

```go
func ParentAccountRefInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput"></a>

```go
func VerifyConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata"></a>

```go
func CustomMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation"></a>

```go
func DisableAutomatedRotation() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ParentAccountRef`<sup>Required</sup> <a name="ParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef"></a>

```go
func ParentAccountRef() *string
```

- *Type:* *string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy"></a>

```go
func PasswordPolicy() *string
```

- *Type:* *string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo"></a>

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection"></a>

```go
func VerifyConnection() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendAccountConfig <a name="OsSecretBackendAccountConfig" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendaccount"

&ossecretbackendaccount.OsSecretBackendAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
	Mount: *string,
	Name: *string,
	PasswordWo: *string,
	Username: *string,
	CustomMetadata: *map[string]*string,
	DisableAutomatedRotation: interface{},
	Namespace: *string,
	ParentAccountRef: *string,
	PasswordPolicy: *string,
	RotationPeriod: *f64,
	RotationSchedule: *string,
	RotationWindow: *f64,
	VerifyConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host">Host</a></code> | <code>*string</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name">Name</a></code> | <code>*string</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username">Username</a></code> | <code>*string</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef">ParentAccountRef</a></code> | <code>*string</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection">VerifyConnection</a></code> | <code>interface{}</code> | Verify the connection to the host with the provided credentials. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata"></a>

```go
CustomMetadata *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation"></a>

```go
DisableAutomatedRotation interface{}
```

- *Type:* interface{}

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `ParentAccountRef`<sup>Optional</sup> <a name="ParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef"></a>

```go
ParentAccountRef *string
```

- *Type:* *string

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy"></a>

```go
PasswordPolicy *string
```

- *Type:* *string

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection"></a>

```go
VerifyConnection interface{}
```

- *Type:* interface{}

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---



