# `pkiSecretBackendExternalCaOrderCertificate` Submodule <a name="`pkiSecretBackendExternalCaOrderCertificate` Submodule" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendExternalCaOrderCertificate <a name="PkiSecretBackendExternalCaOrderCertificate" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate vault_pki_secret_backend_external_ca_order_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

pkisecretbackendexternalcaordercertificate.NewPkiSecretBackendExternalCaOrderCertificate(scope Construct, id *string, config PkiSecretBackendExternalCaOrderCertificateConfig) PkiSecretBackendExternalCaOrderCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig">PkiSecretBackendExternalCaOrderCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig">PkiSecretBackendExternalCaOrderCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendExternalCaOrderCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

pkisecretbackendexternalcaordercertificate.PkiSecretBackendExternalCaOrderCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

pkisecretbackendexternalcaordercertificate.PkiSecretBackendExternalCaOrderCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

pkisecretbackendexternalcaordercertificate.PkiSecretBackendExternalCaOrderCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

pkisecretbackendexternalcaordercertificate.PkiSecretBackendExternalCaOrderCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PkiSecretBackendExternalCaOrderCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PkiSecretBackendExternalCaOrderCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PkiSecretBackendExternalCaOrderCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendExternalCaOrderCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.caChain">CaChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.orderIdInput">OrderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaChain`<sup>Required</sup> <a name="CaChain" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.caChain"></a>

```go
func CaChain() *[]*string
```

- *Type:* *[]*string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.orderIdInput"></a>

```go
func OrderIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendExternalCaOrderCertificateConfig <a name="PkiSecretBackendExternalCaOrderCertificateConfig" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/pkisecretbackendexternalcaordercertificate"

&pkisecretbackendexternalcaordercertificate.PkiSecretBackendExternalCaOrderCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	OrderId: *string,
	RoleName: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.mount">Mount</a></code> | <code>*string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.orderId">OrderId</a></code> | <code>*string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#mount PkiSecretBackendExternalCaOrderCertificate#mount}

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.orderId"></a>

```go
OrderId *string
```

- *Type:* *string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#order_id PkiSecretBackendExternalCaOrderCertificate#order_id}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#role_name PkiSecretBackendExternalCaOrderCertificate#role_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaOrderCertificate.PkiSecretBackendExternalCaOrderCertificateConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_order_certificate#namespace PkiSecretBackendExternalCaOrderCertificate#namespace}

---



