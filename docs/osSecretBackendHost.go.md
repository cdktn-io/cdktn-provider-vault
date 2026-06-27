# `osSecretBackendHost` Submodule <a name="`osSecretBackendHost` Submodule" id="@cdktn/provider-vault.osSecretBackendHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendHost <a name="OsSecretBackendHost" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host vault_os_secret_backend_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

ossecretbackendhost.NewOsSecretBackendHost(scope Construct, id *string, config OsSecretBackendHostConfig) OsSecretBackendHost
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig">OsSecretBackendHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig">OsSecretBackendHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey">ResetSshHostKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetCustomMetadata"></a>

```go
func ResetCustomMetadata()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetDisableAutomatedRotation"></a>

```go
func ResetDisableAutomatedRotation()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationPeriod"></a>

```go
func ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationSchedule"></a>

```go
func ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetRotationWindow"></a>

```go
func ResetRotationWindow()
```

##### `ResetSshHostKey` <a name="ResetSshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.resetSshHostKey"></a>

```go
func ResetSshHostKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

ossecretbackendhost.OsSecretBackendHost_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

ossecretbackendhost.OsSecretBackendHost_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

ossecretbackendhost.OsSecretBackendHost_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

ossecretbackendhost.OsSecretBackendHost_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OsSecretBackendHost resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsSecretBackendHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsSecretBackendHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput">CustomMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput">RotationWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput">SshHostKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey">SshHostKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadataInput"></a>

```go
func CustomMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotationInput"></a>

```go
func DisableAutomatedRotationInput() interface{}
```

- *Type:* interface{}

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriodInput"></a>

```go
func RotationPeriodInput() *f64
```

- *Type:* *f64

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationScheduleInput"></a>

```go
func RotationScheduleInput() *string
```

- *Type:* *string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindowInput"></a>

```go
func RotationWindowInput() *f64
```

- *Type:* *f64

---

##### `SshHostKeyInput`<sup>Optional</sup> <a name="SshHostKeyInput" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKeyInput"></a>

```go
func SshHostKeyInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.customMetadata"></a>

```go
func CustomMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.disableAutomatedRotation"></a>

```go
func DisableAutomatedRotation() interface{}
```

- *Type:* interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.passwordPolicy"></a>

```go
func PasswordPolicy() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationPeriod"></a>

```go
func RotationPeriod() *f64
```

- *Type:* *f64

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationSchedule"></a>

```go
func RotationSchedule() *string
```

- *Type:* *string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.rotationWindow"></a>

```go
func RotationWindow() *f64
```

- *Type:* *f64

---

##### `SshHostKey`<sup>Required</sup> <a name="SshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.sshHostKey"></a>

```go
func SshHostKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHost.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendHostConfig <a name="OsSecretBackendHostConfig" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v17/ossecretbackendhost"

&ossecretbackendhost.OsSecretBackendHostConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Address: *string,
	Mount: *string,
	Name: *string,
	CustomMetadata: *map[string]*string,
	DisableAutomatedRotation: interface{},
	Namespace: *string,
	PasswordPolicy: *string,
	Port: *f64,
	RotationPeriod: *f64,
	RotationSchedule: *string,
	RotationWindow: *f64,
	SshHostKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address">Address</a></code> | <code>*string</code> | Address of the host (hostname or IP). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount">Mount</a></code> | <code>*string</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name">Name</a></code> | <code>*string</code> | Name of the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata">CustomMetadata</a></code> | <code>*map[string]*string</code> | Custom metadata for the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>interface{}</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port">Port</a></code> | <code>*f64</code> | Port to connect to on the host. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>*f64</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>*string</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow">RotationWindow</a></code> | <code>*f64</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey">SshHostKey</a></code> | <code>*string</code> | SSH host key for the host. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

Address of the host (hostname or IP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#address OsSecretBackendHost#address}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#mount OsSecretBackendHost#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#name OsSecretBackendHost#name}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.customMetadata"></a>

```go
CustomMetadata *map[string]*string
```

- *Type:* *map[string]*string

Custom metadata for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#custom_metadata OsSecretBackendHost#custom_metadata}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.disableAutomatedRotation"></a>

```go
DisableAutomatedRotation interface{}
```

- *Type:* interface{}

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#disable_automated_rotation OsSecretBackendHost#disable_automated_rotation}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#namespace OsSecretBackendHost#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.passwordPolicy"></a>

```go
PasswordPolicy *string
```

- *Type:* *string

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#password_policy OsSecretBackendHost#password_policy}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port to connect to on the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#port OsSecretBackendHost#port}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationPeriod"></a>

```go
RotationPeriod *f64
```

- *Type:* *f64

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#rotation_period OsSecretBackendHost#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationSchedule"></a>

```go
RotationSchedule *string
```

- *Type:* *string

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#rotation_schedule OsSecretBackendHost#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.rotationWindow"></a>

```go
RotationWindow *f64
```

- *Type:* *f64

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#rotation_window OsSecretBackendHost#rotation_window}

---

##### `SshHostKey`<sup>Optional</sup> <a name="SshHostKey" id="@cdktn/provider-vault.osSecretBackendHost.OsSecretBackendHostConfig.property.sshHostKey"></a>

```go
SshHostKey *string
```

- *Type:* *string

SSH host key for the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/os_secret_backend_host#ssh_host_key OsSecretBackendHost#ssh_host_key}

---



