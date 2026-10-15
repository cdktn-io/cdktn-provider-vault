# `pkiSecretBackendWrappedKeyImport` Submodule <a name="`pkiSecretBackendWrappedKeyImport` Submodule" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendWrappedKeyImport <a name="PkiSecretBackendWrappedKeyImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

pkisecretbackendwrappedkeyimport.NewPkiSecretBackendWrappedKeyImport(scope Construct, id *string, config PkiSecretBackendWrappedKeyImportConfig) PkiSecretBackendWrappedKeyImport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

pkisecretbackendwrappedkeyimport.PkiSecretBackendWrappedKeyImport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

pkisecretbackendwrappedkeyimport.PkiSecretBackendWrappedKeyImport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

pkisecretbackendwrappedkeyimport.PkiSecretBackendWrappedKeyImport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

pkisecretbackendwrappedkeyimport.PkiSecretBackendWrappedKeyImport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendWrappedKeyImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput">ExportKeyHmacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput">WrappedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey">WrappedKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `ExportKeyHmacInput`<sup>Optional</sup> <a name="ExportKeyHmacInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput"></a>

```go
func ExportKeyHmacInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `WrappedKeyInput`<sup>Optional</sup> <a name="WrappedKeyInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput"></a>

```go
func WrappedKeyInput() *string
```

- *Type:* *string

---

##### ~~`ExportKeyHmac`~~<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func ExportKeyHmac() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### ~~`WrappedKey`~~<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func WrappedKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendWrappedKeyImportConfig <a name="PkiSecretBackendWrappedKeyImportConfig" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/pkisecretbackendwrappedkeyimport"

&pkisecretbackendwrappedkeyimport.PkiSecretBackendWrappedKeyImportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExportKeyHmac: *string,
	Mount: *string,
	WrappedKey: *string,
	KeyName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>*string</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount">Mount</a></code> | <code>*string</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey">WrappedKey</a></code> | <code>*string</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportKeyHmac`<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac"></a>

```go
ExportKeyHmac *string
```

- *Type:* *string

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `WrappedKey`<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey"></a>

```go
WrappedKey *string
```

- *Type:* *string

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---



