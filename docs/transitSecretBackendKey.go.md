# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

transitsecretbackendkey.NewTransitSecretBackendKey(scope Construct, id *string, config TransitSecretBackendKeyConfig) TransitSecretBackendKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">ResetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">ResetConvergentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">ResetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">ResetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc">ResetHybridKeyTypeEc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc">ResetHybridKeyTypePqc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId">ResetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName">ResetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">ResetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet">ResetParameterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowPlaintextBackup` <a name="ResetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```go
func ResetAllowPlaintextBackup()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```go
func ResetAutoRotatePeriod()
```

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext"></a>

```go
func ResetContext()
```

##### `ResetConvergentEncryption` <a name="ResetConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```go
func ResetConvergentEncryption()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```go
func ResetDeletionAllowed()
```

##### `ResetDerived` <a name="ResetDerived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```go
func ResetDerived()
```

##### `ResetExportable` <a name="ResetExportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```go
func ResetExportable()
```

##### `ResetHybridKeyTypeEc` <a name="ResetHybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc"></a>

```go
func ResetHybridKeyTypeEc()
```

##### `ResetHybridKeyTypePqc` <a name="ResetHybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc"></a>

```go
func ResetHybridKeyTypePqc()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```go
func ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize"></a>

```go
func ResetKeySize()
```

##### `ResetManagedKeyId` <a name="ResetManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId"></a>

```go
func ResetManagedKeyId()
```

##### `ResetManagedKeyName` <a name="ResetManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName"></a>

```go
func ResetManagedKeyName()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```go
func ResetMinDecryptionVersion()
```

##### `ResetMinEncryptionVersion` <a name="ResetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```go
func ResetMinEncryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetParameterSet` <a name="ResetParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet"></a>

```go
func ResetParameterSet()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

transitsecretbackendkey.TransitSecretBackendKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

transitsecretbackendkey.TransitSecretBackendKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

transitsecretbackendkey.TransitSecretBackendKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

transitsecretbackendkey.TransitSecretBackendKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransitSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransitSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">Keys</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">SupportsDecryption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">SupportsDerivation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">SupportsEncryption</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">SupportsSigning</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">AllowPlaintextBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">BackendInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">ConvergentEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">DerivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">ExportableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput">HybridKeyTypeEcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput">HybridKeyTypePqcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput">KeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput">ManagedKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput">ManagedKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">MinEncryptionVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput">ParameterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">Backend</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">ConvergentEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">Derived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">Exportable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc">HybridKeyTypeEc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc">HybridKeyTypePqc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId">ManagedKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName">ManagedKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet">ParameterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```go
func Keys() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```go
func MinAvailableVersion() *f64
```

- *Type:* *f64

---

##### `SupportsDecryption`<sup>Required</sup> <a name="SupportsDecryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```go
func SupportsDecryption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsDerivation`<sup>Required</sup> <a name="SupportsDerivation" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```go
func SupportsDerivation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsEncryption`<sup>Required</sup> <a name="SupportsEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```go
func SupportsEncryption() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SupportsSigning`<sup>Required</sup> <a name="SupportsSigning" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```go
func SupportsSigning() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AllowPlaintextBackupInput`<sup>Optional</sup> <a name="AllowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```go
func AllowPlaintextBackupInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```go
func AutoRotatePeriodInput() *f64
```

- *Type:* *f64

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```go
func BackendInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `ConvergentEncryptionInput`<sup>Optional</sup> <a name="ConvergentEncryptionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```go
func ConvergentEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```go
func DeletionAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `DerivedInput`<sup>Optional</sup> <a name="DerivedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```go
func DerivedInput() interface{}
```

- *Type:* interface{}

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```go
func ExportableInput() interface{}
```

- *Type:* interface{}

---

##### `HybridKeyTypeEcInput`<sup>Optional</sup> <a name="HybridKeyTypeEcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput"></a>

```go
func HybridKeyTypeEcInput() *string
```

- *Type:* *string

---

##### `HybridKeyTypePqcInput`<sup>Optional</sup> <a name="HybridKeyTypePqcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput"></a>

```go
func HybridKeyTypePqcInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput"></a>

```go
func KeySizeInput() *f64
```

- *Type:* *f64

---

##### `ManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedKeyIdInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput"></a>

```go
func ManagedKeyIdInput() *string
```

- *Type:* *string

---

##### `ManagedKeyNameInput`<sup>Optional</sup> <a name="ManagedKeyNameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput"></a>

```go
func ManagedKeyNameInput() *string
```

- *Type:* *string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```go
func MinDecryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `MinEncryptionVersionInput`<sup>Optional</sup> <a name="MinEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```go
func MinEncryptionVersionInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ParameterSetInput`<sup>Optional</sup> <a name="ParameterSetInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput"></a>

```go
func ParameterSetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllowPlaintextBackup`<sup>Required</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```go
func AllowPlaintextBackup() interface{}
```

- *Type:* interface{}

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```go
func AutoRotatePeriod() *f64
```

- *Type:* *f64

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```go
func Backend() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `ConvergentEncryption`<sup>Required</sup> <a name="ConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```go
func ConvergentEncryption() interface{}
```

- *Type:* interface{}

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```go
func DeletionAllowed() interface{}
```

- *Type:* interface{}

---

##### `Derived`<sup>Required</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```go
func Derived() interface{}
```

- *Type:* interface{}

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```go
func Exportable() interface{}
```

- *Type:* interface{}

---

##### `HybridKeyTypeEc`<sup>Required</sup> <a name="HybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc"></a>

```go
func HybridKeyTypeEc() *string
```

- *Type:* *string

---

##### `HybridKeyTypePqc`<sup>Required</sup> <a name="HybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc"></a>

```go
func HybridKeyTypePqc() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `ManagedKeyId`<sup>Required</sup> <a name="ManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId"></a>

```go
func ManagedKeyId() *string
```

- *Type:* *string

---

##### `ManagedKeyName`<sup>Required</sup> <a name="ManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName"></a>

```go
func ManagedKeyName() *string
```

- *Type:* *string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```go
func MinDecryptionVersion() *f64
```

- *Type:* *f64

---

##### `MinEncryptionVersion`<sup>Required</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```go
func MinEncryptionVersion() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ParameterSet`<sup>Required</sup> <a name="ParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet"></a>

```go
func ParameterSet() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/transitsecretbackendkey"

&transitsecretbackendkey.TransitSecretBackendKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Backend: *string,
	Name: *string,
	AllowPlaintextBackup: interface{},
	AutoRotatePeriod: *f64,
	Context: *string,
	ConvergentEncryption: interface{},
	DeletionAllowed: interface{},
	Derived: interface{},
	Exportable: interface{},
	HybridKeyTypeEc: *string,
	HybridKeyTypePqc: *string,
	Id: *string,
	KeySize: *f64,
	ManagedKeyId: *string,
	ManagedKeyName: *string,
	MinDecryptionVersion: *f64,
	MinEncryptionVersion: *f64,
	Namespace: *string,
	ParameterSet: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">Backend</a></code> | <code>*string</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the encryption key to create. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>interface{}</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>*f64</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context">Context</a></code> | <code>*string</code> | Base64 encoded context for key derivation. Required if derived is set to true. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">ConvergentEncryption</a></code> | <code>interface{}</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>interface{}</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">Derived</a></code> | <code>interface{}</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">Exportable</a></code> | <code>interface{}</code> | Enables keys to be exportable. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc">HybridKeyTypeEc</a></code> | <code>*string</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc">HybridKeyTypePqc</a></code> | <code>*string</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize">KeySize</a></code> | <code>*f64</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId">ManagedKeyId</a></code> | <code>*string</code> | The UUID of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName">ManagedKeyName</a></code> | <code>*string</code> | The name of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>*f64</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>*f64</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet">ParameterSet</a></code> | <code>*string</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">Type</a></code> | <code>*string</code> | Specifies the type of key to create. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```go
Backend *string
```

- *Type:* *string

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `AllowPlaintextBackup`<sup>Optional</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```go
AllowPlaintextBackup interface{}
```

- *Type:* interface{}

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```go
AutoRotatePeriod *f64
```

- *Type:* *f64

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context"></a>

```go
Context *string
```

- *Type:* *string

Base64 encoded context for key derivation. Required if derived is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#context TransitSecretBackendKey#context}

---

##### `ConvergentEncryption`<sup>Optional</sup> <a name="ConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```go
ConvergentEncryption interface{}
```

- *Type:* interface{}

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```go
DeletionAllowed interface{}
```

- *Type:* interface{}

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `Derived`<sup>Optional</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```go
Derived interface{}
```

- *Type:* interface{}

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `Exportable`<sup>Optional</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```go
Exportable interface{}
```

- *Type:* interface{}

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `HybridKeyTypeEc`<sup>Optional</sup> <a name="HybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc"></a>

```go
HybridKeyTypeEc *string
```

- *Type:* *string

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `HybridKeyTypePqc`<sup>Optional</sup> <a name="HybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc"></a>

```go
HybridKeyTypePqc *string
```

- *Type:* *string

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize"></a>

```go
KeySize *f64
```

- *Type:* *f64

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `ManagedKeyId`<sup>Optional</sup> <a name="ManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId"></a>

```go
ManagedKeyId *string
```

- *Type:* *string

The UUID of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#managed_key_id TransitSecretBackendKey#managed_key_id}

---

##### `ManagedKeyName`<sup>Optional</sup> <a name="ManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName"></a>

```go
ManagedKeyName *string
```

- *Type:* *string

The name of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#managed_key_name TransitSecretBackendKey#managed_key_name}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```go
MinDecryptionVersion *f64
```

- *Type:* *f64

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `MinEncryptionVersion`<sup>Optional</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```go
MinEncryptionVersion *f64
```

- *Type:* *f64

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `ParameterSet`<sup>Optional</sup> <a name="ParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet"></a>

```go
ParameterSet *string
```

- *Type:* *string

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---



