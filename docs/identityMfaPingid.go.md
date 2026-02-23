# `identityMfaPingid` Submodule <a name="`identityMfaPingid` Submodule" id="@cdktn/provider-vault.identityMfaPingid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaPingid <a name="IdentityMfaPingid" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid vault_identity_mfa_pingid}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

identitymfapingid.NewIdentityMfaPingid(scope Construct, id *string, config IdentityMfaPingidConfig) IdentityMfaPingid
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig">IdentityMfaPingidConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig">IdentityMfaPingidConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat">ResetUsernameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetUsernameFormat` <a name="ResetUsernameFormat" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.resetUsernameFormat"></a>

```go
func ResetUsernameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityMfaPingid resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

identitymfapingid.IdentityMfaPingid_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

identitymfapingid.IdentityMfaPingid_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

identitymfapingid.IdentityMfaPingid_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

identitymfapingid.IdentityMfaPingid_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IdentityMfaPingid resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityMfaPingid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityMfaPingid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IdentityMfaPingid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl">AdminUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl">AuthenticatorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl">IdpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId">MethodId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor">MountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath">NamespacePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias">OrgAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature">UseSignature</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input">SettingsFileBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput">UsernameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64">SettingsFileBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat">UsernameFormat</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminUrl`<sup>Required</sup> <a name="AdminUrl" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.adminUrl"></a>

```go
func AdminUrl() *string
```

- *Type:* *string

---

##### `AuthenticatorUrl`<sup>Required</sup> <a name="AuthenticatorUrl" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.authenticatorUrl"></a>

```go
func AuthenticatorUrl() *string
```

- *Type:* *string

---

##### `IdpUrl`<sup>Required</sup> <a name="IdpUrl" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idpUrl"></a>

```go
func IdpUrl() *string
```

- *Type:* *string

---

##### `MethodId`<sup>Required</sup> <a name="MethodId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.methodId"></a>

```go
func MethodId() *string
```

- *Type:* *string

---

##### `MountAccessor`<sup>Required</sup> <a name="MountAccessor" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.mountAccessor"></a>

```go
func MountAccessor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespacePath"></a>

```go
func NamespacePath() *string
```

- *Type:* *string

---

##### `OrgAlias`<sup>Required</sup> <a name="OrgAlias" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.orgAlias"></a>

```go
func OrgAlias() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseSignature`<sup>Required</sup> <a name="UseSignature" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.useSignature"></a>

```go
func UseSignature() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `SettingsFileBase64Input`<sup>Optional</sup> <a name="SettingsFileBase64Input" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64Input"></a>

```go
func SettingsFileBase64Input() *string
```

- *Type:* *string

---

##### `UsernameFormatInput`<sup>Optional</sup> <a name="UsernameFormatInput" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormatInput"></a>

```go
func UsernameFormatInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `SettingsFileBase64`<sup>Required</sup> <a name="SettingsFileBase64" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.settingsFileBase64"></a>

```go
func SettingsFileBase64() *string
```

- *Type:* *string

---

##### `UsernameFormat`<sup>Required</sup> <a name="UsernameFormat" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.usernameFormat"></a>

```go
func UsernameFormat() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingid.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaPingidConfig <a name="IdentityMfaPingidConfig" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/identitymfapingid"

&identitymfapingid.IdentityMfaPingidConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SettingsFileBase64: *string,
	Id: *string,
	Namespace: *string,
	UsernameFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64">SettingsFileBase64</a></code> | <code>*string</code> | A base64-encoded third-party settings contents as retrieved from PingID's configuration page. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#id IdentityMfaPingid#id}. |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat">UsernameFormat</a></code> | <code>*string</code> | A template string for mapping Identity names to MFA methods. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SettingsFileBase64`<sup>Required</sup> <a name="SettingsFileBase64" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.settingsFileBase64"></a>

```go
SettingsFileBase64 *string
```

- *Type:* *string

A base64-encoded third-party settings contents as retrieved from PingID's configuration page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#settings_file_base64 IdentityMfaPingid#settings_file_base64}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#id IdentityMfaPingid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#namespace IdentityMfaPingid#namespace}

---

##### `UsernameFormat`<sup>Optional</sup> <a name="UsernameFormat" id="@cdktn/provider-vault.identityMfaPingid.IdentityMfaPingidConfig.property.usernameFormat"></a>

```go
UsernameFormat *string
```

- *Type:* *string

A template string for mapping Identity names to MFA methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_mfa_pingid#username_format IdentityMfaPingid#username_format}

---



